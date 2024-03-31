<script>
	import { page } from '$app/stores';

	export let icon = '';
	export let href = '';
	export let onClick = () => {};
</script>

<a {href} on:click={onClick} class="hover:bg-white/10 rounded-lg">
	<li class="px-3 py-4 flex gap-4 rounded-lg cursor-pointer" class:active={$page.url.pathname == href}>
		<img src={icon} alt="" />
		<span><slot /></span>
	</li>
</a>

<style>
	.active {
		@apply bg-purple-500;
	}
</style>
