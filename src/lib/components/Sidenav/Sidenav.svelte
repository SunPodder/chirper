<script>
	import { redirect } from '@sveltejs/kit';
	import home from '$lib/assets/home.svg';
	import search from '$lib/assets/search.svg';
	import activity from '$lib/assets/heart.svg';
	import create from '$lib/assets/create.svg';
	import communities from '$lib/assets/community.svg';
	import profile from '$lib/assets/user.svg';
	import Item from './Item.svelte';
	import { page } from '$app/stores';
	import { pushState } from '$app/navigation';

	let className = '';
	export { className as class };

	async function showCreatePage(e){
		e.preventDefault();
		pushState('/create', {create: true, redirect: $page.url.pathname});
	}
</script>

<ul class="p-6 flex flex-col gap-6 {className}">
	<Item href="/" icon={home}>Home</Item>
	<Item href="/search" icon={search}>Search</Item>
	<Item href="/activity" icon={activity}>Activity</Item>
	<Item href="/create" icon={create} onClick={showCreatePage}>Create Chirp</Item>
	<Item href="/community" icon={communities}>Communities</Item>
	<Item href="/@{$page.data.user.username}" icon={profile}>Profile</Item>
</ul>
