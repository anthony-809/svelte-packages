<script lang="ts">
    export let text:string
</script>

<button on:click>{text}</button>

<style>
    button{
        border: none;
        cursor: pointer;
        text-decoration: none;
        padding: 5px 10px;
        border-radius: 5px;
        background-color: var(--buttonBg);
        color: var(--buttonColor);
        font-size: 14px;
        font-weight: 300;
        margin-bottom: 5px;
    }
</style>