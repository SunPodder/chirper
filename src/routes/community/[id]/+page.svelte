<script>
	import { pushState } from '$app/navigation';
	import { page } from '$app/stores';
	import Chirp from '$lib/components/Chirp/Chirp.svelte';
	import * as Avatar from '$lib/components/ui/avatar';
	import Icon from '@iconify/svelte';

	async function showCreatePage(e){
		e.preventDefault();
		pushState('/create', {create: true, redirect: $page.url.pathname});
	}

	export let data;
	$: community = data.community;
</script>

<div class="w-full px-8 ml-4">
	<div class="relative">
		<div>
			<img src={community.cover} alt="" width="800" height="300" class="rounded-md" />
		</div>
		<div class="mt-4 w-3/6">
			<div class="font-bold text-3xl">
				{community.name}
			</div>
			<div class="font-medium">123,456 members</div>

			<div class="w-full max-w-4xl mt-8">
				<div class="flex gap-3">
					<Avatar.Root class="w-14 h-14">
						<Avatar.Image src={$page.data.user.avatar} alt={$page.data.user.username} />
						<Avatar.Fallback>{$page.data.user.name}</Avatar.Fallback>
					</Avatar.Root>
					<input
						type="text"
						placeholder="What's on your mind?"
						class="block p-2.5 w-full rounded-3xl bg-gray-500 bg-opacity-30 focus:outline-none text-2xl pl-4"
						on:focus="{showCreatePage}"
					/>
				</div>
				<div class="flex mt-4 items-center gap-3">
					<button class="grow flex justify-center items-center gap-1">
						<Icon icon="mdi:camera" class="w-7 h-7" />
						Photo
					</button>
					<button class="grow flex justify-center items-center gap-1">
						<Icon icon="mdi:emoticon-outline" class="w-7 h-7" />
						Emoji
					</button>
					<button class="grow flex justify-center items-center gap-1">
						<Icon icon="mdi:map-marker-outline" class="w-7 h-7" />
						Location
					</button>
				</div>
			</div>

			<div class="p-4 max-h-full mt-12 flex flex-col gap-16">
				{#each community.chirps as chirp}
					<Chirp {chirp} />
				{/each}
			</div>
		</div>
	</div>
</div>
