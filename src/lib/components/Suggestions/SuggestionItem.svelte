<script>
	import * as Avatar from '$lib/components/ui/avatar';

	export let data;
	export let type = 'user';
</script>

<div class="flex items-center gap-4 p-4">
	<div>
		<Avatar.Root>
			<Avatar.Image src={data.avatar || data.cover} alt="@{data.username}" />
			<Avatar.Fallback>{data.name.slice(0, 2)}</Avatar.Fallback>
		</Avatar.Root>
	</div>
	<a href="{type == 'user' ? `/@${data.username}` : `/community/${data.id}`}">
		<div>
			<div class="font-bold">
				{data.name}
			</div>
			<div class="text-gray-400">
				{data.username || ''}
			</div>
		</div>
	</a>
	<div class="ml-auto">
		<button class="px-4 py-2 bg-violet-500 rounded-lg text-sm font-semibold"> {type == 'user' ? 'Follow' : 'Join'} </button>
	</div>
</div>
