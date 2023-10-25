<script>
    import home from "$lib/assets/home.svg";
    import search from "$lib/assets/search.svg";
    import activity from "$lib/assets/heart.svg";
    import create from "$lib/assets/create.svg";
    import communities from "$lib/assets/community.svg";
    import profile from "$lib/assets/user.svg";

</script>

<style>
    li {
        @apply p-3 flex gap-4;
    }
</style>

<div>
    <ul class="p-6 flex flex-col min-w-[213px]">
        <li>
            <img src="{home}" alt="">
            <span>Home</span>
        </li>
        <li>
            <img src="{search}" alt="">
            <span>Search</span>
        </li>
        <li>
            <img src="{activity}" alt="">
            <span>Activity</span>
        </li>
        <li>
            <img src="{create}" alt="">
            <span>Create Chirp</span>
        </li>
        <li>
            <img src="{communities}" alt="">
            <span>Communities</span>
        </li>
        <li>
            <img src="{profile}" alt="">
            <span>Profile</span>
        </li>
    </ul>
</div>