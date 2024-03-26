<script>
	import * as Avatar from '$lib/components/ui/avatar';

	export let data;
</script>

<svelte:head>
	<title>Followers ({data.user.username}) | Chirper</title>
</svelte:head>

<div class="w-full">
	<h1 class="text-4xl font-medium">Followers</h1>
	<ul class="mt-10">
		{#each data.followers as follower}
			<li class="flex items-center gap-4 p-4">
				<div>
					<Avatar.Root>
						<Avatar.Image src={follower.avatar} alt="@{follower.username}" />
						<Avatar.Fallback>{follower.username.slice(0, 2)}</Avatar.Fallback>
					</Avatar.Root>
				</div>
				<a href="/@{follower.username}">
					<div>
						<div class="font-bold">
							{follower.name}
						</div>
						<div class="text-gray-400">
							{follower.username}
						</div>
					</div>
				</a>
			</li>
		{/each}
	</ul>
</div>
