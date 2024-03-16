import { fail, redirect } from '@sveltejs/kit';

function generateId() {
	return Math.random().toString(36).substring(2);
}

export const actions = {
	default: async function ({ locals, request, cookies }) {
		let data = Object.fromEntries(await request.formData());
		let errors = {};
		data.username = data.username.trim();
		data.password = data.password.trim();

		data.username ? null : (errors.username = 'Username is required');
		data.password ? null : (errors.password = 'Password is required');

		if (Object.keys(errors).length) {
			return fail(400, { error: errors });
		}

		data = {
			...data,
			name: data.username,
			avatar: `https://api.dicebear.com/7.x/lorelei/jpg?seed=${data.username}`,
			cover: `https://picsum.photos/seed/${data.username}/800/300`,
			bio: '',
			followers: 0,
			following: 0,
			posts: 0,
			address: ''
		};
		let sessionId = generateId();

		try {
			await locals.db.create(`user:${data.username}`, data)[0];
			await locals.db.create(`session:${sessionId}`, { user: 'user:' + data.username });
		} catch (e) {
			return { error: e.message };
		}

		cookies.set('session', sessionId);
		throw redirect(303, '/');
	}
};
