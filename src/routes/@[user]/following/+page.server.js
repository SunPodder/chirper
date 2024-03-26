/** @type {import('./$types').PageServerLoad} */
export async function load({ params, locals }) {
	let following = (await locals.db.query(`SELECT following from user:${params.user} FETCH following`))[0][0].following;

	return {
		following
	};
}
