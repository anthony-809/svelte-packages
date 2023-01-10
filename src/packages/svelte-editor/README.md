## A Svelte editor powered by EditorJS.
### Install Svelte Editor
```
npm install @anthony809/svelte-editor
```
### Import Editor
``` javascript
import Editor from "@anthony809/svelte-editor/Editor.svelte";
```

#### How to use
Simple, add the ```Editor``` component from ```@anthony809/svelte-editor/Editor.svelte``` to your svelte pages.
``` svelte
<script lang="ts">
    import Editor from "@anthony809/svelte-editor/Editor.svelte";
    let Editor:any
</script>

<EditorJs bind:data={editorJsData} />
```

Bind data from ```Editor``` to always have the latest data
``` svelte
<EditorJs bind:data={editorJsData} />
```

#### How to view data saved from Editor
``` svelte
<script lang="ts">
    import savedEditorData from "yourDataSource"
    // Import editor viewer
    import EditorViewer from "@anthony809/svelte-editor/Viewer.svelte";
</script>

<EditorViewer data={EditorViewer} />
```

### More about EditorJS
[Editor.js](https://editorjs.io/ "EditorJs")
