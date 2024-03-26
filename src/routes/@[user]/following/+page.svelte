<script>
	import * as Avatar from '$lib/components/ui/avatar';

	export let data;
</script>

<svelte:head>
	<title>Followings ({data.user.username}) | Chirper</title>
</svelte:head>

<div class="w-full">
	<h1 class="text-4xl font-medium">Followings</h1>
	<ul class="mt-10">
		{#each data.following as follow}
			<li class="flex items-center gap-4 p-4">
				<div>
					<Avatar.Root>
						<Avatar.Image src={follow.avatar} alt="@{follow.username}" />
						<Avatar.Fallback>{follow.username.slice(0, 2)}</Avatar.Fallback>
					</Avatar.Root>
				</div>
				<a href="/@{follow.username}">
					<div>
						<div class="font-bold">
							{follow.name}
						</div>
						<div class="text-gray-400">
							{follow.username}
						</div>
					</div>
				</a>
			</li>
		{/each}
	</ul>
</div>
