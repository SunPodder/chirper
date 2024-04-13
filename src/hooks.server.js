import { env } from '$env/dynamic/private';
import { redirect } from '@sveltejs/kit';
import { Surreal } from 'surrealdb.js';

const DATABASE_URL = env.DATABASE_URL || `http://127.0.0.1:8000/rpc`;

export async function handle({ event, resolve }) {
	const db = new Surreal();
	await db.connect(DATABASE_URL, {
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
