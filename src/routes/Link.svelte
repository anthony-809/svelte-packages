<script lang="ts">
    export let text:string
    export let href:string
    import { page } from "$app/stores";
    $: active = $page.url.pathname === href
</script>

<a href={href} class:active>{text}</a>

<style>
    a{
        text-decoration: none;
        padding: 5px 10px;
        border-radius: 5px;
        background-color: var(--buttonBg);
        color: var(--buttonColor);
        font-size: 14px;
        font-weight: 300;
        margin-bottom: 5px;
        margin-right: 10px;
    }
    .active{ background-color: #7292a1; }
</style>