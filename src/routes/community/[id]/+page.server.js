import { error } from 'console';

export async function load({ params, locals }) {
    let community = (await locals.db.query(`SELECT * FROM ${params.id} FETCH chirps, chirps.author, chirps.comments.user`))[0][0];

	if (!community) {
		error(404, `Community does not exist!`);
	}

	return {
		community
	};
}
