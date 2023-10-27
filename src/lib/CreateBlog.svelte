<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let title: string;
    export let content: string;
    export let desc: string;

    const dispatch = createEventDispatcher()
</script>

<!-- component -->
<div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class=" bg-white rounded-lg dark:bg-gray-700 overflow-hidden shadow-sm sm:rounded-lg">
            <div class="p-6 bg-white rounded-lg shadow dark:bg-gray-700">
                <div class="mb-4">
                    <label class="text-xl text-white">Title <span class="text-red-500">*</span>
                        <input on:input={(e) => title = e.target.value} type="text" class="border-2 sm:rounded-lg  dark:bg-gray-800 border-gray-700 p-2 w-full" name="title" id="title" value="" required>
                    </label><br />
                </div>

                <div class="mb-4">
                    <label class="text-xl text-white">Description
                        <input on:input={(e) => desc = e.target.value} type="text" class="border-2 sm:rounded-lg  dark:bg-gray-800 border-gray-300 p-2 w-full" name="description" id="description" placeholder="(Optional)">
                    </label><br />
                </div>

                <div class="mb-8">
                    <label class="text-xl text-white">Content <span class="text-red-500">*</span>
                        <br/>
                        <textarea on:input={(e) => content = e.target.value} name="content" class="border-2 sm:rounded-lg  dark:bg-gray-800 border-gray-500" />
                    </label>
                </div>

                <div class="flex p-1">
                    <button on:click={(e) => {
                        e.preventDefault()
                        dispatch('clicked')
                    }} class="p-3 text-sm sm:rounded-lg text-white bg-blue-700 hover:bg-blue-800">Submit</button>
                </div>
            </div>
        </div>
    </div>
</div>
