<script lang="ts">
    import SvelteHead from "$packages/svelte-head/SvelteHead.svelte";
    const pageData = {
        appName:"Anthony809",
        favicon:"/favicon.png",
        title:"Home page",
        description:"Svelte head is a component to easily add and update svelte route pages's meta information."
    }
</script>

<SvelteHead {...pageData}/>