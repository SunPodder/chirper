import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, locals }) {
	let user = (await locals.db.select(`user:${params.user}`))[0];
	let chirps = (await locals.db.query(`SELECT * FROM chirp WHERE user = ${user.id} FETCH user, comments.user`))[0];

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
		let target = (await locals.db.select(`user:${params.user}`))[0];

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
			body: { message: `You are now following ${target.name}` }
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
