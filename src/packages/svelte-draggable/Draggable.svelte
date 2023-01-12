<script lang="ts">
    import config from "./config";
    $: style = Object.entries($config).map(data=>{ return `--${data[0]}:${data[1]};` }).join("")
</script>

<div class="draggable" {style}>
    <slot />
</div>

<style>
    .draggable{
        display: flex;
        flex-wrap: wrap;
        background-color: var(--bg);
        border-radius: var(--br);
    }
</style>