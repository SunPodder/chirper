import { redirect } from '@sveltejs/kit';

export const POST = async ({ locals, cookies }) => {
	locals.db.delete(`session:${cookies.get('session')}`);
	cookies.set('session', '', { path: '/' });
	locals.user = null;
	redirect(302, '/login');
};
