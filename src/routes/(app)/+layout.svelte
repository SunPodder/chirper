<script>
	import Sidenav from '$lib/components/Sidenav/Sidenav.svelte';
	import Topbar from '$lib/components/Topbar.svelte';
	import '../../app.postcss';
</script>

<div class="h-screen w-screen">
	<Topbar />
	<div class="sm:flex">
		<Sidenav class="w-full sm:w-1/2 md:w-1/3 lg:w-1/6" />
		<slot />
	</div>
</div>
