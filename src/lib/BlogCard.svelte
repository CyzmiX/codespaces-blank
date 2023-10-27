<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let title: string
    export let description: string  | undefined
    export let createdAt: string

    let dispatch = createEventDispatcher()
</script>


<div on:click={() => dispatch('clicked')} class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
    <a href="/blogs/{title}">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ title }</h5>
    </a>
    <p class="mb-3 font-light text-gray-700 dark:text-gray-400">{ createdAt }</p>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{ description }</p>
    <a href="/blogs/{title}" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
</div>
<br/>

<style>
    div {
        margin: auto;
        box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.2);
        
        transition: all 0.25s ease;
    }
    div:hover {
        box-shadow: 0px 2px 15px rgba(255, 255, 255, 0.25);
        cursor: pointer;
    }
</style>
