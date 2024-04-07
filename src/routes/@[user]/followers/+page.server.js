/** @type {import('./$types').PageServerLoad} */
export async function load({ params, locals }) {
	let followers = (
		await locals.db.query(
			`SELECT followers from user WHERE username = '${params.user}' FETCH followers`
		)
	)[0][0].followers;

	return {
		followers
	};
}
