<script lang="ts">
    export let src:string
</script>

<div class="image">
    <img {src} alt="">
</div>

<style>
    .image{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
    }
    img{
        width: 100%;
        height: 100%;
        object-position: center;
        object-fit: contain;
    }
</style>