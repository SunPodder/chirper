import { error } from 'console';

export const actions = {
	like: async function ({ locals, params }) {
		try {
			let chirpId = params.id;

			let target = (await locals.db.select(`${chirpId}`))[0];

			if (!target) {
				error(404, `Chirp does not exist!`);
			}

			if (target.likes.includes(locals.user.id))
				await locals.db.query(`UPDATE ${target.id} SET likes -= ${locals.user.id}`);
			else await locals.db.query(`UPDATE ${target.id} SET likes += ${locals.user.id}`);
		} catch (error) {
			console.error(error);
		}

		return { success: true };
	}
};
