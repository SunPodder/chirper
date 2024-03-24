import { redirect } from '@sveltejs/kit';
import { Surreal } from 'surrealdb.js';

export async function handle({ event, resolve }) {
	const db = new Surreal();
	await db.connect('http://127.0.0.1:8000/rpc', {
		namespace: 'dev',
		database: 'test'
	});

	// let sessionId = event.cookies.get('session');

	// if (sessionId) {
	// 	let user = (await db.query(`SELECT * FROM ${sessionId}.user`))[0][0];
	// 	event.locals.user = user;
	// }

	// if (!event.locals.user && event.url.pathname !== '/login' && event.url.pathname !== '/signup') {
	// 	event.cookies.set('session', '', { path: '/' });
	// 	let redirectUrl = event.url.pathname == '/' ? '' : `?redirect=${event.url.pathname}`;
	// 	return redirect(302, `/login${redirectUrl}`);
	// }

	let user;
	if (event.cookies.get('token')) {
		try {
			user = await db.authenticate(event.cookies.get('token'));
		} catch (error) {}
	}

	if (!user && event.url.pathname !== '/login' && event.url.pathname !== '/signup') {
		event.cookies.set('session', '', { path: '/' });
		let redirectUrl = event.url.pathname == '/' ? '' : `?redirect=${event.url.pathname}`;
		return redirect(302, `/login${redirectUrl}`);
	}

	event.locals.db = db;
	event.locals.user = user;

	const response = await resolve(event);
	return response;
}
