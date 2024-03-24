<script>
	import { enhance } from '$app/forms';
	import logo from '$lib/assets/logo.svg';
	import { User } from '$lib/stores/user.store.js';

	export let form;
	export let data;

	let first_name = '';
	let last_name = '';
	let username = '';
	let password = '';

	async function signup() {
		try {
			let token = await data.db.signup(
				{
					name: {
						first: first_name,
						last: last_name
					},
					username,
					password,
					namespace: 'dev',
					database: 'test',
					scope: 'user'
				},
			);

			document.cookie = `token=${token}; path=/; max-age=31536000`;

			User.set(await data.db.info())

			localStorage.setItem('token', token);
		} catch (error) {
			console.log(error);
		}
	}
</script>

<svelte:head>
	<title>Sign Up | Chirper</title>
</svelte:head>

<div class="w-full mt-32 flex flex-col items-center justify-center gap-4">
	<img src={logo} alt="" width="140" />
	<h1 class="font-bold text-3xl text-center">Create an Account</h1>
	<form on:submit|preventDefault={signup} class="flex flex-col gap-2 w-full items-center">
		<div>Enter your username to create your account</div>
		{#if form?.error.username}
			<div class="text-red-500">{form.error.username}</div>
		{/if}
		<div class="flex gap-2">
			<input
				value={first_name}
				type="text"
				placeholder="First Name"
				class="max-w-[9.5rem] rounded-lg p-2 border-gray border-[1px] bg-transparent focus:outline-none"
			/>
			<input
				value={last_name}
				type="text"
				placeholder="Last Name"
				class="max-w-[9.5rem] rounded-lg p-2 border-gray border-[1px] bg-transparent focus:outline-none"
			/>
		</div>
		<input
			value={username}
			type="text"
			placeholder="Username"
			class="max-w-xs w-full rounded-lg p-2 border-gray border-[1px] bg-transparent focus:outline-none"
		/>
		{#if form?.error.password}
			<div class="text-red-500">{form.error.password}</div>
		{/if}
		<input
			value={password}
			type="password"
			placeholder="Password"
			class="max-w-xs w-full rounded-lg p-2 border-gray border-[1px] bg-transparent focus:outline-none"
		/>
		<button class="w-full max-w-xs bg-gray-100 text-black rounded-lg p-2" type="submit">
			Sign up
		</button>
	</form>
	<div class="w-full max-w-sm text-center mt-1">
		<div class="text-center line">Already have an account?</div>
		<a href="/login">
			<button class="w-full max-w-xs border-white border-2 rounded-lg p-2 mt-5 font-medium">
				Login
			</button>
		</a>
	</div>
</div>

<style>
	.line::before,
	.line::after {
		display: inline-block;
		content: '';
		border-top: 1px solid gray;
		width: 5rem;
		margin: -0.7rem 0.5rem;
		transform: translateY(-1rem);
	}
</style>
