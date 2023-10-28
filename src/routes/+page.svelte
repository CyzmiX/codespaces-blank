<script lang="ts">
    import Toast from "$lib/Toast.svelte";
    import { goto } from "$app/navigation";
    import Blog from "$lib/BlogCard.svelte";
    import LoginModal from "$lib/LoginModal.svelte";
    import Navbar from "$lib/Navbar.svelte";    
    import type { PageData } from "./$types";
    let show = false
    let error: string = ''
    interface Blog {
        title: string
        content: string
        desc?: string 
        date?: string
    }
    
    interface Blogs {
        blogs: Array<Blog> 


    }

    async function login(data: CustomEvent) {
        if (!data.detail.email || !data.detail.password) {
            console.error('Invalid data!')
            error = 'Invalid data!'
            return
        }

        const res = await fetch('/', {
            method: 'POST',
            body: JSON.stringify({
                mode: data.detail.mode,
                email: data.detail.email,
                password: data.detail.password
            }),
            headers: {
				'content-type': 'application/json',
			},
        })

        const json = await res.json()
        console.log(json)
        if (json.error) {
            console.error(json.error)
            error = json.error
            return
        }
        
        //goto('/login/success')
    }

    export let data: Blogs

</script>
<Toast show={Boolean(error)} on:close={() => error = ''} msg='Invalid Content!' />
<LoginModal on:login={login} on:hide={() => show = false} {show} />
<Navbar on:clicked={() => show = true} />

<h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Latest Blogs</h3>

{#each data?.blogs as idc, i}
    {@const blog = data?.blogs[data?.blogs?.length - i - 1]}

    <Blog 
        on:clicked={() => goto(`/blogs/${blog.title}`)} 
        title={blog.title} 
        description={blog.desc ? blog.desc : ''}  
        createdAt={blog.date ? blog.date : '2023'}  
    />    
{/each}

<style>
    h3 {
        text-align: center;
        font-size: 2rem;
        padding: 8px 12px 24px 12px;
    }
</style>
