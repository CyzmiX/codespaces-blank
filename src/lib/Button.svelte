<script lang="ts">
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher()
    export let text: string = 'button';
    export let clicked: boolean = false

</script>

<main>

    <button class="cool-btn" on:click={
        () => {
            dispatch('clicked')
            clicked = true;
        }
    }>{ text }</button>

</main>


<style>


</style>