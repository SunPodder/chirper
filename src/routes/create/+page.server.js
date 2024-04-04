import { redirect } from '@sveltejs/kit';

export const actions = {
	chirp: async function ({ locals, request }) {
		let data = Object.fromEntries(await request.formData());

		try {
			await locals.db.create('chirp', {
				content: data.message
			});

		} catch (error) {
			console.error(error);
		}

		redirect(302, data.redirect == 'undefined' ? '/' : data.redirect);
	},
	comment: async function ({ locals, request }) {
		let data = Object.fromEntries(await request.formData());
		let comment = {
			user: locals.user.id,
			content: data.comment
		};
		comment = JSON.stringify(comment);

		try {
			await locals.db.query(`UPDATE ${data.chirpId} SET comments += ${comment}`);
		} catch (error) {
			console.error(error);
		}

		return { success: true };
	}
};
