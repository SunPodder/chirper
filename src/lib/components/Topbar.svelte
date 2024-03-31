<script>
	import { invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';
	import logo from '$lib/assets/logo.svg';

	function logout() {
		fetch('/api/auth/logout', {
			method: 'POST'
		}).then((res) => {
			if (res.ok) {
				invalidateAll();
			}
		});
	}
</script>

<div class="flex">
	<a class="flex items-center h-full p-6 gap-2" href="/">
		<img src={logo} alt="" width="32" height="32" />
		<span class="text-4xl font-medium"> Chirper </span>
	</a>
	<div class="flex w-full flex-row-reverse p-5">
		{#if $page.url.pathname == `/@${$page.data?.user?.username}`}
			<button class="bg-purple-500 text-white px-4 py-2 rounded-md" on:click={logout}>Logout</button
			>
		{/if}
	</div>
</div>
