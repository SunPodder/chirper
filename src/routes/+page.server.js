export async function load({ locals }) {
	let chirps = (await locals.db.query(`SELECT * FROM chirp LIMIT 10 FETCH user, comments.user`))[0];
	// select users that might be interesting to follow or have things in common with
	let suggestedUsers = (await locals.db.query(`SELECT * FROM user WHERE id != ${locals.user.id} LIMIT 4`))[0];

	return {
		chirps,
		suggestedUsers
	};
}
