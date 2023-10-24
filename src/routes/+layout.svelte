<script>
	import Sidenav from '$lib/components/Sidenav.svelte';
import Topbar from '$lib/components/Topbar.svelte';
	import '../app.postcss';
</script>

<div class="h-screen w-screen ">
	<Topbar />
	<div class="flex">
        <Sidenav />
        <slot />
    </div>
</div>
