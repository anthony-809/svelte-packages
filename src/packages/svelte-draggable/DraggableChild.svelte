<script lang="ts">
    export let id:string|number
    import { createEventDispatcher  } from "svelte";

    function dragStart(e:any){
        const itemElement:HTMLDivElement = e.target        
        currentItemElement = itemElement
        e.dataTransfer.setData('id', id);
    }

    function dragEnter(e:any){
        const itemElement:HTMLDivElement = e.target
        itemElement.classList.add("active") // add active class
    }

    function dragLeave(e:any){
        const itemElement:HTMLDivElement = e.target
        itemElement.classList.remove("active") // remove active class
    }

    function dragDrop(e:any){
        const itemElement:HTMLDivElement = e.target
        itemElement.classList.remove("active") // remove active class
        const fromID = e.dataTransfer.getData('id')
        const toID = itemElement.dataset.draggable_id
        // Send custom event
        dispatch("dropEnded",{ fromID,toID })
    }

    const dispatch = createEventDispatcher()
    let active:boolean = false
    let currentItemElement:HTMLDivElement
</script>

<div class="draggableChild" data-draggable_id={id} class:active draggable="true" on:dragstart={dragStart} on:dragenter={dragEnter} on:dragleave={dragLeave} on:dragover|preventDefault|stopPropagation on:drop={dragDrop}>
    <div class="child">
        <slot />
    </div>
</div>

<style>
    .draggableChild{
        margin: var(--margin);
        width: calc(100% / var(--count) - calc(var(--margin) * 2));
        border-radius: var(--br);
        overflow: hidden;
        cursor: pointer;
        background-color: var(--bg);
        transition: opacity ease 0.3s , transform ease-in-out 0.3s;
    }
    .draggableChild.active{
        opacity: 40%;
        transform: scale(1.05);
    }
    .child {
        display: contents;
    }
    :global(.draggableChild .child *:not(.exclude)){
        pointer-events: none;
    }
</style>