<script>
	import { ChirpBlock } from '$lib/components/Chirp';
	import { Suggestions } from '$lib/components/Suggestions';

	let chirps = Array(3).fill({
		id: 'jduwbi',
		user: {
			name: 'Sun Podder',
			username: 'SunPodder',
			avatar: 'https://github.com/SunPodder.png'
		},
		content: 'Hello World! A test message.',
		likes: 0,
		comments: [
			{
				user: {
					name: 'Antonex',
					username: 'antonex',
					avatar: 'https://github.com/Antonex.png'
				},
				id: 'jdubwi'
			},
			{
				user: {
					name: 'Shad CN',
					username: 'shadcn',
					avatar: 'https://github.com/shadcn.png'
				},
				id: 'jdubwi'
			}
		]
	});
</script>

<div class="flex w-screen">
	<div class="min-w-[420px] flex-grow p-4 ml-8">
		<h1 class="text-4xl font-medium">Home</h1>
		<div class="p-4 mt-10 flex flex-col gap-20">
			{#each chirps as chirp}
				<ChirpBlock {chirp} />
			{/each}
		</div>
	</div>
	<div class="p-4 mr-4 min-w-[400px] hidden md:block">
		<div>
			<h2 class="font-medium text-lg">Suggested Communities</h2>
			<Suggestions />
		</div>
		<div class="mt-12">
			<h2 class="font-medium text-lg">Similar Minds</h2>
			<Suggestions />
		</div>
	</div>
</div>
