import * as query from "./query.js" 
import * as mutation from "./mutation.js" 
export * from "../types/generated"
export { gql,generateTypes } from "../utilities/server.js"
export default new class Shopify{
    query=query
    mutation=mutation
}