import { redirect } from '@sveltejs/kit';
import { Surreal } from 'surrealdb.js';

export async function handle({ event, resolve }) {
	const db = new Surreal();
	await db.connect('http://127.0.0.1:8000/rpc', {
		namespace: 'dev',
		database: 'test'
	});

	let token = event.cookies.get('session');

	if (token) {
		try {
			await db.authenticate(token);
			event.locals.user = await db.info();
		} catch (error) {
			event.cookies.set('session', '', { path: '/' });
		}
	}

	if (!event.locals.user && event.url.pathname !== '/login' && event.url.pathname !== '/signup') {
		let redirectUrl = event.url.pathname == '/' ? '' : `?redirect=${event.url.pathname}`;
		return redirect(302, `/login${redirectUrl}`);
	}

	event.locals.db = db;

	const response = await resolve(event);
	db.close();

	return response;
}
