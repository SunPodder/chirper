<script>
    import heart from '$lib/assets/heart-gray.svg';
	import heart_filled from '$lib/assets/heart-filled.svg';
	import comment from '$lib/assets/reply.svg';
	import share from '$lib/assets/share.svg';
	import repost from '$lib/assets/repost.svg';

	let liked = false;

	function toggleLike() {
		liked = !liked;
	}

    export let onComment = () => {};
</script>

<div class="mt-4 flex gap-3">
    <button on:click={toggleLike}>
        <img src={liked ? heart_filled : heart} alt="" />
    </button>
    <button on:click={onComment}>
        <img src={comment} alt="" />
    </button>
    <button>
        <img src={share} alt="" />
    </button>
    <button>
        <img src={repost} alt="" />
    </button>
</div>