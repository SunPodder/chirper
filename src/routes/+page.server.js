export async function load({ locals }) {
	let chirps = (await locals.db.query(`SELECT * FROM chirp LIMIT 10 FETCH user, comments.user`))[0];

	return {
		chirps
	};
}
