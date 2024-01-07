<script>
	import { page } from '$app/stores';

	export let icon = '';
	export let href = '';
</script>

<a {href} class="hover:bg-white/10 rounded-lg">
	<li class="px-3 py-4 flex gap-4 rounded-lg cursor-pointer" class:active={$page.route.id == href}>
		<img src={icon} alt="" />
		<span><slot /></span>
	</li>
</a>

<style>
	.active {
		@apply bg-purple-500;
	}
</style>
