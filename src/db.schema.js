import {Surreal} from 'surrealdb.js'

const db = new Surreal()
await db.connect('http://127.0.0.1:8000/rpc', {
	namespace: 'dev',
	database: 'test',
	username: 'admin',
	password: 'admin'
});


const userTable = `

`

const userScope = `

`


await db.query(userTable);
await db.query(userScope);


