// See https://kit.svelte.dev/docs/types#app

import type { Surreal } from "surrealdb.js";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			db: Surreal;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
