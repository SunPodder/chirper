<script>
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import * as Avatar from '$lib/components/ui/avatar';
	import Icon from '@iconify/svelte';

	let className = '';
	$: user = $page.data.user;

	export let chirpId = '';
	export { className as class };
</script>

<form method="POST" action="/create?/comment" class="max-w-[580px] {className}" use:enhance>
	<div class="flex">
		<div class="flex w-10 items-center flex-col mt-[-15px]">
			<div class="w-[2px] h-[22px] bg-gray-700" />
			<Avatar.Root class="w-8 h-8">
				<Avatar.Image src={user.avatar} alt={user.username} />
				<Avatar.Fallback>{user.name}</Avatar.Fallback>
			</Avatar.Root>
		</div>
		<div class="w-full">
			<input type="hidden" name="chirpId" value={chirpId}>
			<!-- svelte-ignore a11y-autofocus -->
			<textarea
				name="comment"
				autofocus="true"
				id="message"
				rows="2"
				class="block p-2.5 w-full text-sm rounded-lg bg-transparent focus:outline-none"
				placeholder="Write your thoughts here..."
			/>
			<div class="flex mt-2 items-center">
				<button>
					<Icon icon="mdi:camera" class="w-5 h-5" />
				</button>
				<button>
					<Icon icon="mdi:emoticon-outline" class="w-5 h-5" />
				</button>
				<button>
					<Icon icon="mdi:map-marker-outline" class="w-5 h-5" />
				</button>
				<span class="ml-auto mr-5 text-xs font-light text-gray-400">
					Press <kbd>ESC</kbd> to exit
				</span>
				<button type="submit">
					<Icon icon="mdi:send" class="w-5 h-5" />
				</button>
			</div>
		</div>
	</div>
</form>

<style>
	button {
		@apply px-2.5 py-1 rounded-lg text-gray-500;
	}
</style>
