<script>
    import home from "$lib/assets/home.svg";
    import search from "$lib/assets/search.svg";
    import activity from "$lib/assets/heart.svg";
    import create from "$lib/assets/create.svg";
    import communities from "$lib/assets/community.svg";
    import profile from "$lib/assets/user.svg";

</script>

<div>
    <ul class="p-6 flex flex-col gap-12 mt-10 ml-4">
        <li class="flex gap-4">
            <img src="{home}" alt="">
            <span>Home</span>
        </li>
        <li class="flex gap-4">
            <img src="{search}" alt="">
            <span>Search</span>
        </li>
        <li class="flex gap-4">
            <img src="{activity}" alt="">
            <span>Activity</span>
        </li>
        <li class="flex gap-4">
            <img src="{create}" alt="">
            <span>Create Chirp</span>
        </li>
        <li class="flex gap-4">
            <img src="{communities}" alt="">
            <span>Communities</span>
        </li>
        <li class="flex gap-4">
            <img src="{profile}" alt="">
            <span>Profile</span>
        </li>
    </ul>
</div>