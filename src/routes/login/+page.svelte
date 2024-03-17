<script>
	import { enhance } from '$app/forms';
	import logo from '$lib/assets/logo.svg';

	export let form;
</script>

<svelte:head>
	<title>Login | Chirper</title>
</svelte:head>

<div class="w-full mt-32 flex flex-col items-center justify-center gap-4">
	<img src={logo} alt="" width="140" />
	<h1 class="font-bold text-3xl text-center">Welcome Back!</h1>
	<form method="POST" use:enhance class="flex flex-col gap-2 w-full max-w-xs">
		<div class="text-center">Enter your username to login</div>
		{#if form?.error.username}
			<div class="text-red-500">{form.error.username}</div>
		{/if}
		<input
			name="username"
			type="text"
			placeholder="Username"
			class="w-full rounded-lg p-2 border-gray border-[1px] bg-transparent focus:outline-none"
		/>
		{#if form?.error.password}
			<div class="text-red-500">{form.error.password}</div>
		{/if}
		<input
			name="password"
			type="password"
			placeholder="Password"
			class="w-full rounded-lg p-2 border-gray border-[1px] bg-transparent focus:outline-none"
		/>
		<button class="w-full bg-gray-100 text-black rounded-lg p-2" type="submit"> Login </button>
	</form>
	<div class="w-full max-w-sm text-center mt-1">
		<div class="text-center line">Don't have an account?</div>
		<a href="/signup">
			<button class="w-full max-w-xs border-white border-2 rounded-lg p-2 mt-5 font-medium">
				Sign up
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
