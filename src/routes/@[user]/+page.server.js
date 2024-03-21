import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, locals }) {
	let user = (await locals.db.select(`user:${params.user}`))[0];
	let chirps = (await locals.db.query(`SELECT * FROM chirp WHERE user = ${user.id} FETCH user`))[0];
	console.log(chirps)

	if (!user) {
		error(404, `User does not exist!`);
	}

	return {
		profile: user,
		chirps
	};
}
