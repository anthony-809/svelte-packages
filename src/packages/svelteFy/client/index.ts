import * as query from "./query.js" 
import * as mutation from "./mutation.js" 
export * from "../types/generated"
export { gql } from "../utilities/index.js"
export default new class Shopify{
    query=query
    mutation=mutation
}