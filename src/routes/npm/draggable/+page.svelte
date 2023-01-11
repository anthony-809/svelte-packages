<script lang="ts">
    import Draggable from "@anthony809/svelte-draggable/Draggable.svelte";
    import DraggableChild from "@anthony809/svelte-draggable/DraggableChild.svelte";  
    import Image from "../../Image.svelte"
    const images = [
        { src:`https://api.dicebear.com/5.x/adventurer/svg?seed=Alice`,alt:`${Date.now()}` },
        { src:`https://api.dicebear.com/5.x/adventurer/svg?seed=Frank`,alt:`${Date.now()}` },
        { src:`https://api.dicebear.com/5.x/adventurer/svg?seed=Bob`,alt:`${Date.now()}` },
        { src:`https://api.dicebear.com/5.x/adventurer/svg?seed=anthony`,alt:`${Date.now()}` },
        { src:`https://api.dicebear.com/5.x/adventurer/svg?seed=Charlie`,alt:`${Date.now()}` },
        { src:`https://api.dicebear.com/5.x/adventurer/svg?seed=tony`,alt:`${Date.now()}` },
        { src:`https://api.dicebear.com/5.x/adventurer/svg?seed=David`,alt:`${Date.now()}` },
        { src:`https://api.dicebear.com/5.x/adventurer/svg?seed=Eve`,alt:`${Date.now()}` },
        { src:`https://api.dicebear.com/5.x/adventurer/svg?seed=pepe`,alt:`${Date.now()}` },
        { src:`https://api.dicebear.com/5.x/adventurer/svg?seed=wtf`,alt:`${Date.now()}` },
        { src:`https://api.dicebear.com/5.x/adventurer/svg?seed=who`,alt:`${Date.now()}` },
        { src:`https://api.dicebear.com/5.x/adventurer/svg?seed=lol`,alt:`${Date.now()}` },
    ]
    // Change draggable change / drop
    function handleDrop(e:any){
        const detailData:{ fromID:string,toID:string } = e.detail
        // Swap array item
        const fromIDArrayData = images[Number(detailData.fromID)]
        images[Number(detailData.fromID)] = images[Number(detailData.toID)]
        images[Number(detailData.toID)] = fromIDArrayData
    }    
</script>

<Draggable >
    {#each images as image,index }
        <DraggableChild on:dropEnded={handleDrop} id={index}>
            <Image src={image.src}/>
        </DraggableChild>
    {/each}
</Draggable>