<script>
	import { onMount } from 'svelte';

	function close(e) {
		if (e.key === 'Escape') {
			history.back();
		}
	}

	onMount(() => {
		document.addEventListener('keydown', close);

		return () => document.removeEventListener('keydown', close);
	});
</script>

<div
	class="w-full h-full bg-slate-700 bg-opacity-80 fixed top-0 z-10 grid place-items-center backdrop-blur-sm"
>
	<div
		class="w-[55%] h-[50%] p-8 bg-background rounded-3xl grid place-items-center shadow-gray-800 shadow-2xl"
	>
		<slot />
	</div>
</div>
