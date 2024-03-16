import { redirect } from '@sveltejs/kit';
import { Surreal } from 'surrealdb.js';

export async function handle({ event, resolve }) {
	const db = new Surreal();
    await db.connect('http://127.0.0.1:8000/rpc', {
        namespace: 'dev',
        database: 'test',
        username: 'admin',
        password: 'admin'
    })

    let sessionId = event.cookies.get('session');

    if (sessionId) {
        let user = (await db.query(`SELECT * FROM session:${sessionId}.user`))[0][0];
        event.locals.user = user;
    }
    
    if (!event.locals.user && event.url.pathname !== '/login' && event.url.pathname !== '/signup') {
        event.cookies.set('session', '', { path: '/' });
        throw redirect(302, '/signup?redirect=' + event.url.pathname);
    }

	event.locals.db = db;


    const response = await resolve(event);
	return response;
}