<script>
	import * as Avatar from '$lib/components/ui/avatar';
	import { onMount } from 'svelte';
	import ActionButtons from './ActionButtons.svelte';
	import Comment from './Comment.svelte';

	onMount(() => {
		window.addEventListener('keydown', (e) => {
			if (e.key === 'Escape') {
				commentEnabled = false;
			}
		});
	});

	let commentEnabled = false;
	export let chirp = {};
</script>

<div>
	<div class="flex">
		<div class="flex flex-col items-center">
			<Avatar.Root class="w-10 h-10">
				<Avatar.Image src={chirp.author.avatar} alt={chirp.author.username} />
				<Avatar.Fallback>{chirp.author.name}</Avatar.Fallback>
			</Avatar.Root>
			{#if !chirp.comments.length == 0}
				<div class="flex-grow w-[2px] bg-gray-700" />
			{/if}
		</div>
		<div class="ml-4">
			<div class="font-bold">
				<a href="/@{chirp.author.username}">
					{chirp.author.name}
				</a>
			</div>
			<a href="/chirp/{chirp.id}">
				<div class="mt-2">
					{chirp.content}
				</div>
			</a>
			<ActionButtons onComment={() => (commentEnabled = !commentEnabled)} {chirp} />
		</div>
	</div>

	<div class="flex">
		<div class="w-10 flex items-center justify-center ml-[4px]">
			{#each chirp.comments.slice(0, 2) as reply}
				{#if reply.user}
					<Avatar.Root class="w-6 h-6 ml-[-6px]">
						<Avatar.Image src={reply.user.avatar} alt={reply.user.username} />
						<Avatar.Fallback>{reply.user.name}</Avatar.Fallback>
					</Avatar.Root>
				{/if}
			{/each}
		</div>
		{#if chirp.comments.length > 0}
			<div class="text-xs flex items-center text-gray-500 ml-4">
				{chirp.comments.length}
				{chirp.comments.length === 1 ? 'reply' : 'replies'}
			</div>
		{/if}
	</div>
	{#if commentEnabled}
		<Comment class="mt-4" chirpId={chirp.id} />
	{/if}
</div>
