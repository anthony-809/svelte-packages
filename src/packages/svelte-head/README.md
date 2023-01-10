## Svelte head is a component to easily add and update svelte route pages's meta information.
### Install component
```
npm install @anthony809/svelte-head
```

### Import component
``` javascript
import SvelteHead from "@anthony809/svelte-head";
```
#### How to use SvelteHead
Import ```SvelteHead``` from ```"@anthony809/svelte-head"```
``` javascript
import SvelteHead from "@anthony809/svelte-head";
```
#### Data needed for ```SvelteHead```
``` javascript
const pageData = {
    appName:"svelte",
    favicon:"/favicon.png",
    title:"Home page",
    description:"Svelte head is a component to easily add and update svelte route pages's meta information."
}
```
#### Set meta data for route's page
``` svelte
<script>
    const pageData = {
        appName:"svelte",
        favicon:"/favicon.png",
        title:"Home page",
        description:"Svelte head is a component to easily add and update svelte route pages's meta information."
    }
</script>

<SvelteHead {...pageData}/>
```

#### Other props for ```SvelteHead```
``` typescript
/** Your app name */
export let appName:string
/** Your app favicon */
export let favicon:string
/** Page title */
export let title:string
/** Page description */
export let description:string
/** Page image backdrop */
export let backdrop:string|undefined = undefined
/** Page Keywords */
export let keywords:string[]|undefined = undefined
/** Page type (Default:website) */
export let ogType:string = 'website'
/** Page location (Default:en_US) */
export let ogLocate:string = 'en_US'
```