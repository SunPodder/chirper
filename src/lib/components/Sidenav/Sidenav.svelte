<script>
	import home from '$lib/assets/home.svg';
	import search from '$lib/assets/search.svg';
	import activity from '$lib/assets/heart.svg';
	import create from '$lib/assets/create.svg';
	import communities from '$lib/assets/community.svg';
	import profile from '$lib/assets/user.svg';
	import Item from './Item.svelte';
	import { page } from '$app/stores';

	let className = '';
	export { className as class };
</script>

<ul class="p-6 flex flex-col gap-6 {className}">
	<Item href="/" icon={home}>Home</Item>
	<Item href="/search" icon={search}>Search</Item>
	<Item href="/activity" icon={activity}>Activity</Item>
	<Item href="/create" icon={create}>Create Chirp</Item>
	<Item href="/communities" icon={communities}>Communities</Item>
	<Item href="/@{$page.data.user.username}" icon={profile}>Profile</Item>
</ul>
