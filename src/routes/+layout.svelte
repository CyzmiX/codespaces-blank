<script>
    import { onMount } from "svelte";
    import "../app.css";

    onMount(() => {
        document.body.style.backgroundColor = '#141e2b'
    })
</script>
  
<slot />