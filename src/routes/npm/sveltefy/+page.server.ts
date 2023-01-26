import SvelteFy, { gql,generateTypes } from "sveltefy/server";
import type { ProductResponse } from "sveltefy/server";
import type { PageServerLoad } from "./$types"

export const load:PageServerLoad = async() => {
    const handle = "harmonyplug"
    const returnData = gql`{ id title handle }`
    const product:ProductResponse = await SvelteFy.query.product(`handle:"${handle}"`,{},returnData)
    // Generate types
    generateTypes(product,"ProductResponse")    
    return { product }
}