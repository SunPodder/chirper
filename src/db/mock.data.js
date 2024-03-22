import { Surreal } from 'surrealdb.js';
import { faker } from '@faker-js/faker';

const db = new Surreal();

await db.connect('http://127.0.0.1:8000/rpc', {
	namespace: 'dev',
	database: 'test',
	username: 'admin',
	password: 'admin'
});

async function createUsers(num) {
	for (let i = 0; i < num; i++) {
		let data = {
			username: `user${i}`,
			password: faker.internet.password(),
			first_name: faker.person.firstName(),
			last_name: faker.person.lastName(),
			bio: '',
			followers: [],
			following: [],
			address: {
				street: faker.location.street(),
				city: faker.location.city(),
				state: faker.location.state(),
				zip: faker.location.zipCode()
			}
		};

		data.name = data.first_name + ' ' + data.last_name;
		data.avatar = `https://api.dicebear.com/7.x/lorelei/jpg?seed=user${data.username}`;
		data.cover = `https://picsum.photos/seed/user${data.username}/800/300`;

		let user = await db.create(`user:${data.username}`, data);
		console.info(`Created user ${i} with id ${user[0].id}`);
	}
}

async function createChirps(num) {
	for (let i = 0; i < num; i++) {
		let data = {
			user: `user:user${i}`,
			content: `Chirp ${i}`,
			likes: 0,
			comments: []
		};
		let chirp = await db.create(`chirp:${i}`, data);
		console.info(`Created chirp ${i} with id ${chirp[0].id}`);
	}
}

async function createCommunities(num){
	for(let i = 0; i < num; i++){
		let data = {
			name: faker.company.name(),
			description: faker.lorem.sentence(),
			creator: `user:user${i}`,
			members: [],
			cover: 'https://picsum.photos/seed/community/800/300',
		}
		let community = await db.create(`community:${i}`, data);
		console.info(`Created community ${i} with id ${community[0].id}`);
	}
}

// get commandline arguments
const args = process.argv.slice(2);

for (let arg of args) {
	switch (arg) {
		case 'users':
			createUsers(10);
			break;
		case 'chirps':
			createChirps(10);
			break;
		case 'communities':
			createCommunities(10);
			break;
		default:
			console.error('Invalid argument');
	}
}
