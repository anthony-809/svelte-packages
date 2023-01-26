<script lang="ts">
    export let text:string
</script>

<button on:click>{text}</button>

<style>
    button{
        width: fit-content;
        border: none;
        cursor: pointer;
        text-decoration: none;
        padding: 10px 20px;
        border-radius: 50px;
        background-color: var(--buttonBg);
        color: var(--buttonColor);
        font-size: 14px;
        font-weight: 300;
        margin-bottom: 5px;
    }
</style>