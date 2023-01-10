<script lang="ts">
    import Button from "../../Button.svelte";
    import Toasts from "$packages/svelte-toasts/Toasts.svelte";
    import { newToast } from "$packages/svelte-toasts/index"; 
    /** Test toasts */
    function testToasts(){
        newToast({
            type:"ok",
            msg:"New user was added"
        })
    }
</script>

<Toasts />
<Button text="TEST TOAST" on:click={testToasts}/>