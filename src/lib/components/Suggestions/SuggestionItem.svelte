<script>
	import * as Avatar from '$lib/components/ui/avatar';

    export let name = "", username = "", avatar = "";
</script>

<div class="flex items-center gap-4 p-4">
	<div>
		<Avatar.Root>
			<Avatar.Image src="{avatar}" alt="@shadcn" />
			<Avatar.Fallback>CN</Avatar.Fallback>
		</Avatar.Root>
	</div>
	<div>
        <div class="font-bold">
            {name}
        </div>
        <div class="text-gray-400">
            {username}
        </div>
    </div>
    <div class="ml-auto">
        <button class="px-4 py-2 bg-violet-500 rounded-lg text-sm font-semibold">
            Follow
        </button>
    </div>
</div>
