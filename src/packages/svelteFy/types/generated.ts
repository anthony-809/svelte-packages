export type TEST_TEST_TEST = any
//TFromJ:ProductResponse:start
export type ProductResponse = {
    data:ProductResponseData
    error:boolean
}
export type ProductResponseData = {
    product:ProductResponseDataProduct
}
export type ProductResponseDataProduct = {
    id:string
    title:string
}
//TFromJ:ProductResponse:end

