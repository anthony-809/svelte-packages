<script lang="ts">
    import SvelteFy, { gql } from "$packages/svelteFy";
    import type { ProductResponse } from "$packages/svelteFy";
    import Button from "../../Button.svelte";
    /** Load shopify data */
    async function loadShopifyData() {
        const handle = "harmonyplug"
        const returnData = gql`{ id title }`
        const product:ProductResponse = await SvelteFy.query.product(`handle:"${handle}"`,{},returnData)
        code = product
    }
    let code:any = ''
</script>
<div style="display:flex;flex-direction:column">
    <Button text="LOAD DATA" on:click={loadShopifyData}/>
    {#if code}
        <code style="width: 100%;">{JSON.stringify(code,null,4)}</code>
    {/if}
</div>