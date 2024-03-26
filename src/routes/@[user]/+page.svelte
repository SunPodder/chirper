<script>
	import { enhance } from '$app/forms';
	import Chirp from '$lib/components/Chirp/Chirp.svelte';

	export let data;
	$: profile = data.profile;
</script>

<svelte:head>
	<title>{profile.name} (@{profile.username}) | Chirper</title>
</svelte:head>

<form action="?/follow" method="post" use:enhance id="followForm" />
<form action="?/unfollow" method="post" use:enhance id="unfollowForm" />

<div class="w-full px-8 ml-4">
	<div class="relative">
		<div>
			<img src={profile.cover} alt="" width="800" height="300" class="rounded-md" />
		</div>
		<img src={profile.avatar} alt="" width="140" class="rounded-full absolute top-[210px] left-8" />
	</div>
	<div class="mt-16 w-3/6">
		<div class="flex">
			<div class="font-bold text-4xl">
				{profile.name} <span class="text-gray-400 text-lg">@{profile.username}</span>
			</div>
			{#if profile.id !== data.user.id}
				<div class="ml-auto">
					{#if profile.followers.includes(data.user.id)}
						<button
							class="bg-purple-500 text-white px-4 py-2 rounded-md"
							type="submit"
							form="unfollowForm">Unfollow</button
						>
					{:else}
						<button
							class="bg-purple-500 text-white px-4 py-2 rounded-md"
							type="submit"
							form="followForm">Follow</button
						>
					{/if}
					<button class="border border-gray-600 text-gray-200 px-4 py-2 rounded-md">Message</button>
				</div>
			{/if}
		</div>
		<div class="flex ml-1">
			<div class="text-gray-300 text-lg mr-8">
				{profile.bio}
			</div>
		</div>
	</div>
	<div class="mt-8">
		<div class="flex w-4/12">
			<div class="mr-8 flex-grow flex items-center flex-col">
				<a href="/@{profile.username}/followers">
					<div class="font-bold text-2xl text-center">{profile.followers.length}</div>
					<div class="text-gray-400">Followers</div>
				</a>
			</div>
			<div class="mr-8 flex-grow flex items-center flex-col">
				<a href="/@{profile.username}/following">
					<div class="font-bold text-2xl text-center">{profile.following.length}</div>
					<div class="text-gray-400">Following</div>
				</a>
			</div>
			<div class="mr-8 flex-grow flex items-center flex-col">
				<div class="font-bold text-2xl text-center">{data.chirps.length}</div>
				<div class="text-gray-400">Posts</div>
			</div>
		</div>
	</div>
	<div class="p-4 max-h-full mt-16 flex flex-col gap-16">
		{#each data.chirps as chirp}
			<Chirp {chirp} />
		{/each}
	</div>
</div>
