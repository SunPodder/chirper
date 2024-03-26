<script>
	import { page } from '$app/stores';
	import Sidenav from '$lib/components/Sidenav/Sidenav.svelte';
	import Topbar from '$lib/components/Topbar.svelte';
	import Create from './create/+page.svelte';
	import '../app.postcss';
	import PageModal from '$lib/components/PageModal.svelte';

	export let data;
</script>

<div class="h-screen w-screen">
	<Topbar />
	<div class="sm:flex">
		{#if $page.data.user}
			<Sidenav class="w-full sm:w-1/2 md:w-1/3 lg:w-1/6" />
		{/if}
		{#if $page.state.create}
			<PageModal>
				<Create {data} />
			</PageModal>
		{/if}
		<slot />
	</div>
</div>
