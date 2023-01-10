<script lang="ts">
    import data from "$data";
    import Editor from "@anthony809/svelte-editor/Editor.svelte";
    import EditorViewer from "@anthony809/svelte-editor/EditorViewer.svelte"
    let editorData:any
    let oldEditorData:any = data.editorJs
</script>

<Editor bind:data={editorData} />
----------------------------------------
{#if editorData} 
    <EditorViewer data={editorData}/> 
{/if}
----------------------------------------
<EditorViewer data={oldEditorData}/> 