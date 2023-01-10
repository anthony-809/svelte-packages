## Svelte Toasts simple component to add PopUp massage on your site.
### Install Svelte Toasts
```
npm install @anthony809/svelte-toasts
```
#### How to use Svelte Toasts
Import ```Toasts``` from ```@anthony809/svelte-toasts/Toasts.svelte```
``` javascript
import Toasts from "@anthony809/svelte-toasts/Toasts.svelte";
```
Add ```Toasts``` to your ```+layout.svelte``` or any svelte page
``` svelte
<script lang="ts">
    import Toasts from "@anthony809/svelte-toasts/Toasts.svelte";
</script>

<Toasts />
```

### Add new toast
From ```@anthony809/svelte-toasts/index``` import the ```newToast``` function
``` svelte
<script lang="ts">
    import { newToast } from "@anthony809/svelte-toasts/index";
    // This function will run every time you click the add user button
    function addUser(){
        // Add new toast, type can be type:"error"|"ok"|"neutral" and msg:string
        // And it will send new Toast to your Toasts component in +layout.svelte
        newToast({
            type:"ok",
            msg:"New user was added"
        })
    }
</script>

<button on:click={addUser}>
    Add user
</button>
```