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
			username: data.username,
			password: data.password,
			first_name: data.first_name,
			last_name: data.last_name,
			name: `${data.first_name} ${data.last_name}`,
			avatar: `https://api.dicebear.com/7.x/lorelei/jpg?seed=${data.username}`,
			cover: `https://picsum.photos/seed/${data.username}/800/300`,
			bio: '',
			followers: [],
			following: [],
			address: {},
		};

		try {
			let token = await locals.db.signup({
				scope: 'user',
				database: 'test',
				namespace: 'dev',
				...data
			});

			let user = await locals.db.info();
			if (!user) return { error: 'User already exists' };

			cookies.set('session', token, { path: '/' });
		} catch (e) {
			console.log(e);
			return { error: e.message };
		}

		redirect(303, '/');
	}
};
