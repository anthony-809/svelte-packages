import * as query from "./client/query.js" 
import * as mutation from "./client/mutation.js" 
export * from "./types/generated"
export { gql } from "./utilities/index.js"
export default new class SvelteFy{
    query=query
    mutation=mutation
}