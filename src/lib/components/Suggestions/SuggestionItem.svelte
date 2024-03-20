<script>
	import * as Avatar from '$lib/components/ui/avatar';

	export let name = '',
		username = '',
		avatar = '';
</script>

<div class="flex items-center gap-4 p-4">
	<div>
		<Avatar.Root>
			<Avatar.Image src={avatar} alt="@{username}" />
			<Avatar.Fallback>{username.slice(0, 2)}</Avatar.Fallback>
		</Avatar.Root>
	</div>
	<a href="/@{username}">
		<div>
			<div class="font-bold">
				{name}
			</div>
			<div class="text-gray-400">
				{username}
			</div>
		</div>
	</a>
	<div class="ml-auto">
		<button class="px-4 py-2 bg-violet-500 rounded-lg text-sm font-semibold"> Follow </button>
	</div>
</div>
