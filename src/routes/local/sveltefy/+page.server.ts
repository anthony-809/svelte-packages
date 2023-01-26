import SvelteFy, { gql,generateTypes } from "$packages/svelteFy/server";
import type { PageServerLoad } from "./$types"

export const load:PageServerLoad = async() => {
    const handle = "harmonyplug"
    const returnData = gql`{ id title }`
    const product = await SvelteFy.query.product(`handle:"${handle}"`,{},returnData)
    // Generate types
    generateTypes(product,"ProductResponse")    
    return { product }
}