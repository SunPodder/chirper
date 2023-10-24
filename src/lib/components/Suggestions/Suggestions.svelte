<script>
import SuggestionItem from "./SuggestionItem.svelte";

export let suggestions = [
    {
        name: "Name",
        username: "@usertag",
        avatar: "https://github.com/shadcn.png"
    },
    {
        name: "Name",
        username: "@usertag",
        avatar: "https://github.com/shadcn.png"
    },
    {
        name: "Name",
        username: "@usertag",
        avatar: "https://github.com/shadcn.png"
    }
]

</script>

<div>
    <ul class="min-w-fit">
        {#each suggestions as suggestion}
            <li>
                <SuggestionItem {...suggestion} />
            </li>
        {/each}
    </ul>
</div>