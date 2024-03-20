<script>
	import Chirp from '$lib/components/Chirp/Chirp.svelte';
	import { Suggestions } from '$lib/components/Suggestions';

	export let data;
</script>

<svelte:head>
	<title>Home | Chirper</title>
</svelte:head>

<div class="flex w-full">
	<div class="flex-grow p-4 ml-8">
		<h1 class="text-4xl font-medium">Home</h1>
		<div class="p-4 max-h-full mt-10 flex flex-col gap-16">
			{#each data.chirps as chirp}
				<Chirp {chirp} />
			{/each}
		</div>
	</div>
	<div class="p-4 mr-4 w-1/5 hidden md:block">
		<div>
			<h2 class="font-medium text-lg">Suggested Communities</h2>
			<Suggestions />
		</div>
		<div class="mt-12">
			<h2 class="font-medium text-lg">Similar Minds</h2>
			<Suggestions suggestions={data.suggestedUsers} />
		</div>
	</div>
</div>
