import { browser } from '$app/environment';
import { User } from '$lib/stores/user.store.js';
import {Surreal} from 'surrealdb.js'

export async function load(event){
    const db = new Surreal();
    await db.connect('http://127.0.0.1:8000/rpc', {
		namespace: 'dev',
		database: 'test',
	});

    let user;

    if (browser){
        if (localStorage.getItem('token')){
            try {
                user = await db.authenticate(localStorage.getItem('token'));
                User.set(user);
            } catch (error) {
                console.log(error);
            }
        }
    }

    return {
        db,
        user
    }
}