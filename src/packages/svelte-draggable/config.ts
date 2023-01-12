import { writable } from "svelte/store";

export default writable({
    /** Border radius */
    br:"5px",
    /** Items to show per line */
    count:"6",
    /** Default background for item div */
    bg:"rgba(0,0,0,.1)",
    /** Margin for item div */
    margin:"10px",
})