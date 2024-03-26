<script>
	import * as Avatar from '$lib/components/ui/avatar';

	export let data;
</script>

<svelte:head>
	<title>Communities | Chirper</title>
</svelte:head>

<div class="w-full">
	<h1>Communities</h1>
	<ul>
		{#each data.communities as community}
			<div class="flex items-center gap-4 p-4">
				<div>
					<Avatar.Root>
						<Avatar.Image src={community.cover} alt="@{community.name}" />
						<Avatar.Fallback>{community.name.slice(0, 2)}</Avatar.Fallback>
					</Avatar.Root>
				</div>
				<a href="/community/{community.id}">
					<div>
						<div class="font-bold">
							{community.name}
						</div>
						<div class="text-gray-400">
							{community.description || ''}
						</div>
					</div>
				</a>
			</div>
		{/each}
	</ul>
</div>
