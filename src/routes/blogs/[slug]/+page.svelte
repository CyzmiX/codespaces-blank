<script lang="ts">
    
    interface Data {
        title?: string
        content?: string 
    }
    export let data: Data;

</script>

<h1>{ data.title }</h1>
<h3>{ data.content ? data.content : 'No article body was written for this article!' }</h3>
