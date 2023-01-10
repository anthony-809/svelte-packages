<script lang="ts">
    export let data:PageServerData
    import type { PageServerData } from "./$types"
    import localData from "$data";
    import Editor from "$packages/svelte-editor/Editor.svelte";
    import EditorViewer from "$packages/svelte-editor/EditorViewer.svelte"
    import config from "$packages/svelte-editor/config";
    config.update(data=>{
        data['pSize'] = "15px"
        return data
    })
    let editorData:any
    let oldEditorData:any = localData
</script>

<Editor bind:data={editorData} />
----------------------------------------
{#if editorData} 
    <EditorViewer data={editorData}/> 
{/if}
----------------------------------------
<EditorViewer data={data.editorData.content}/> 