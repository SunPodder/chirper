<script>
	import { enhance } from '$app/forms';
	import logo from '$lib/assets/logo.svg';

	export let form;
	$: console.log(form);
</script>

<div class="w-full mt-32 flex flex-col items-center justify-center gap-4">
	<img src={logo} alt="" width="140" />
	<h1 class="font-bold text-3xl text-center">Create an Account</h1>
	<form method="POST" use:enhance class="flex flex-col gap-2">
		<div>Enter your email below to create your account</div>
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
		<button class="w-full bg-gray-100 text-black rounded-lg p-2"> Sign in with Email </button>
	</form>
	<!-- 
	<div class="text-center">Or continue with</div>
	<div class="">
		<button class="rounded-lg p-2 border-gray border-[1px] flex justify-center w-[280px]">
			<Icon icon="akar-icons:github-fill" class="w-5 h-5" />
			Github
		</button>
	</div> -->
	<div>By clicking continue, you agree to our Terms of Service and Privacy Policy .</div>
</div>
