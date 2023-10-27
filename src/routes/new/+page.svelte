<script lang="ts">
    import { goto } from "$app/navigation";
    import CreateBlog from "$lib/CreateBlog.svelte"
    import Toast from "$lib/Toast.svelte";
    import type { PageData } from "./$types";
    let title: string = ''
    let desc: string =  ''
    let content: string = ''
    let error: string = ''

    export let data: PageData

	async function create() {
        if (!title || !content ) {
            error = 'Invalid content'
            console.error(error)
            return
        }

		const response = await fetch('/new', {
			method: 'POST',
			body: JSON.stringify({ id: data.length, title, desc, content, date: new Date().toLocaleDateString() }),
			headers: {
				'content-type': 'application/json',
			},
		});
	
		let res = await response.json();

        if (res.success === true) {
            goto('/')
        }
	}

</script>

<Toast show={Boolean(error)} on:close={() => error = ''} msg='Invalid Content!' />

<CreateBlog on:clicked={create} bind:content={content} bind:desc={desc} bind:title={title} />


