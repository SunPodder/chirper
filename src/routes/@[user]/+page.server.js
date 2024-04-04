import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, locals }) {
	let user = (await locals.db.query(`SELECT * FROM user WHERE username = '${params.user}'`))[0][0];
	let chirps = (await locals.db.query(`SELECT * FROM chirp WHERE author = ${user.id} FETCH author, comments.user`))[0];

	if (!user) {
		error(404, `User does not exist!`);
	}

	return {
		profile: user,
		chirps
	};
}


export const actions = {
	follow: async function({ locals, params }) {
		let target = (await locals.db.query(`SELECT id, followers from user WHERE username = '${params.user}'`))[0][0];

		if (!target) {
			error(404, `User does not exist!`);
		}

		if (target.followers.includes(locals.user.id)) {
			return {
				status: 400,
				body: { message: `You are already following ${target.name}` }
			};
		}

		await locals.db.query(`UPDATE ${target.id} SET followers += ${locals.user.id}`);
		await locals.db.query(`UPDATE ${locals.user.id} SET following += ${target.id}`);

		return {
			status: 200,
			body: { message: `You are now following ${target.id}` }
		};
	},

	unfollow: async function({ locals, params }) {
		let target = (await locals.db.select(`user:${params.user}`))[0];

		if (!target) {
			error(404, `User does not exist!`);
		}

		if (!target.followers.includes(locals.user.id)) {
			return {
				status: 400,
				body: { message: `You are not following ${target.name}` }
			};
		}

		await locals.db.query(`UPDATE ${target.id} SET followers -= ${locals.user.id}`);
		await locals.db.query(`UPDATE ${locals.user.id} SET following -= ${target.id}`);

		return {
			status: 200,
			body: { message: `You are no longer following ${target.name}` }
		};
	}
}
