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

		try {
			let user = (await locals.db.select(`user:${data.username}`))[0];
			if (user?.password !== data.password) {
				errors.password = 'Invalid username or password';
				errors.username = 'Invalid username or password';

				return fail(401, { error: errors });
			}

			let sessionId = (
				await locals.db.create(`session`, {
					user: 'user:' + data.username
				})
			)[0];

			console.log('sessionId', sessionId);

			cookies.set('session', sessionId.id, { path: '/' });
		} catch (e) {
			return { error: e.message };
		}

		redirect(303, '/');
	}
};
