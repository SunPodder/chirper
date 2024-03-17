<script>
	import { enhance } from '$app/forms';
	import * as Avatar from '$lib/components/ui/avatar';
	import Icon from '@iconify/svelte';

	export let data;
</script>

<svelte:head>
	<title>Create | Chirper</title>
</svelte:head>

<form method="POST" action="/create?/chirp" use:enhance class="w-full grid place-items-center">
	<div class="w-full max-w-4xl">
		<div class="flex">
			<Avatar.Root class="w-14 h-14">
				<Avatar.Image src={data.user.avatar} alt={data.user.username} />
				<Avatar.Fallback>{data.user.name}</Avatar.Fallback>
			</Avatar.Root>
			<span class="bold text-4xl flex items-center px-4">
				{data.user.name}
			</span>
		</div>
		<div class="w-full mt-4">
			<!-- svelte-ignore a11y-autofocus -->
			<textarea
				name="message"
				autofocus="true"
				id="message"
				rows="5"
				class="block p-2.5 w-full rounded-lg bg-transparent focus:outline-none text-2xl"
				placeholder="What's on your mind, {data.user.first_name}?"
			/>
			<div class="flex mt-2 items-center gap-3">
				<button>
					<Icon icon="mdi:camera" class="w-7 h-7" />
				</button>
				<button>
					<Icon icon="mdi:emoticon-outline" class="w-7 h-7" />
				</button>
				<button>
					<Icon icon="mdi:map-marker-outline" class="w-7 h-7" />
				</button>
				<span class="ml-auto mr-5 text-s font-light text-gray-400">
					Press <kbd>ESC</kbd> to exit
				</span>
				<button type="submit">
					<Icon icon="mdi:send" class="w-7 h-7" />
				</button>
			</div>
		</div>
	</div>
</form>
