import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, locals }) {
	let user = (await locals.db.select(`user:${params.user}`))[0];

	if (!user) {
		throw error(404, `User does not exist!`);
	}

	return {
		profile: user
	};
}
