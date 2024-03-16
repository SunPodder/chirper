<script>
	export let data;
	$: profile = data.profile;
</script>

<svelte:head>
	<title>{profile.name} (@{profile.username}) | Chirper</title>
</svelte:head>

<div class="w-full px-8 ml-4">
	<div class="relative">
		<div>
			<img src={profile.cover} alt="" width="800" height="300" class="rounded-md" />
		</div>
		<img src={profile.avatar} alt="" width="140" class="rounded-full absolute top-[210px] left-8" />
	</div>
	<div class="mt-16 w-3/6">
		<div class="flex">
			<div class="font-bold text-4xl">
				{profile.name} <span class="text-gray-400 text-lg">@{profile.username}</span>
			</div>
			<div class="ml-auto">
				<button class="bg-purple-500 text-white px-4 py-2 rounded-md">Follow</button>
				<button class="border border-gray-600 text-gray-200 px-4 py-2 rounded-md">Message</button>
			</div>
		</div>
		<div class="flex ml-1">
			<div class="text-gray-300 text-lg mr-8">
				{profile.bio}
			</div>
		</div>
	</div>
	<div class="mt-8">
		<div class="flex w-4/12">
			<div class="mr-8 flex-grow flex items-center flex-col">
				<div class="font-bold text-2xl">{profile.followers}</div>
				<div class="text-gray-400">Followers</div>
			</div>
			<div class="mr-8 flex-grow flex items-center flex-col">
				<div class="font-bold text-2xl">{profile.following}</div>
				<div class="text-gray-400">Following</div>
			</div>
			<div class="mr-8 flex-grow flex items-center flex-col">
				<div class="font-bold text-2xl">{profile.posts}</div>
				<div class="text-gray-400">Posts</div>
			</div>
		</div>
	</div>
</div>
