<script>
	import * as Avatar from '$lib/components/ui/avatar';
	import heart from '$lib/assets/heart-gray.svg';
	import heart_filled from '$lib/assets/heart-filled.svg';
	import comment from '$lib/assets/reply.svg';
	import share from '$lib/assets/share.svg';
	import repost from '$lib/assets/repost.svg';

	let liked = false;

	function toggleLike() {
		liked = !liked;
	}

	export let chirp = {};
</script>

<div class="flex">
	<div class="flex flex-col items-center">
		<Avatar.Root class="w-10 h-10">
			<Avatar.Image src={chirp.user.avatar} alt={chirp.user.username} />
			<Avatar.Fallback>{chirp.user.username}</Avatar.Fallback>
		</Avatar.Root>
		<div class="flex-grow w-[2px] bg-gray-700" />
	</div>
	<div class="ml-4">
		<div class="font-bold">
			{chirp.user.name}
		</div>
		<div class="mt-2">
			{chirp.content}
		</div>
		<div class="mt-4 flex gap-3">
			<button on:click={toggleLike}>
				<img src={liked ? heart_filled : heart} alt="" />
			</button>
			<button>
				<img src={comment} alt="" />
			</button>
			<button>
				<img src={share} alt="" />
			</button>
			<button>
				<img src={repost} alt="" />
			</button>
		</div>
	</div>
</div>

<div class="flex mt-2">
	<div class="w-10 flex items-center justify-center ml-[4px]">
		{#each chirp.comments as reply}
			{#if reply.user}
				<Avatar.Root class="w-6 h-6 ml-[-6px]">
					<Avatar.Image src={reply.user.avatar} alt={reply.user.username} />
					<Avatar.Fallback>{reply.user.username}</Avatar.Fallback>
				</Avatar.Root>
			{/if}
		{/each}
	</div>
    <div class="text-xs flex items-center text-gray-500 ml-4">
        {chirp.comments.length} replies
    </div>
</div>
