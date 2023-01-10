<script>
    import"./layout.css"
    import Link from "./Link.svelte"
</script>

<div class="app">
    <h2>LOCAL TEST</h2>
    <div class="links">
        <Link href="/" text="Home"/>
        <Link href="/local/editorjs" text="EditorJS"/>
        <Link href="/local/toasts" text="Toasts"/>
    </div>
    <h2>NPM TEST</h2>
    <div class="links">
        <Link href="/" text="Home"/>
        <Link href="/npm/editorjs" text="EditorJS"/>
        <Link href="/npm/toasts" text="Toasts"/>
    </div>
    <slot />
</div>

<style>
    .app{
        padding: 10px;
    }
    .links{
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }
</style>