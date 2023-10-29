<script lang="ts">
    import sanitizeHtml from 'sanitize-html';
    interface Data {
        title?: string
        content?: string
        date?: string
    }
    export let data: Data;

    console.log(data)

</script>
<article style='margin-top: 15vh;' class="shadow-xl max-w-2xl px-6 rounded-xl py-24 mx-auto space-y-12 dark:bg-gray-800 dark:text-gray-50">
	<div class="w-full mx-auto space-y-4 text-center">

		<h1 class="text-4xl font-bold leadi md:text-5xl">{data.title}</h1>
		<p class="text-sm dark:text-gray-400">{ data.date }</p>
	</div>
	<div class="dark:text-gray-100">
		<p style='font-size: 16px'>{@html sanitizeHtml(data.content)}</p>
	</div>
	<div class="border-t dark:border-gray-700"/>
</article>
<style>
    p {
        & h1 {
            font-size: 2rem;
        }
        & h2, h3 {
            font-size: 1.2rem;
        }
        & code {
            border: 1.8px solid white;
            padding: 6px;
            border-radius: 6px;
            background-color: rgba(0, 0, 0, 0.4);
            text-align: center;
            box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.5);
        }
    }
</style>
