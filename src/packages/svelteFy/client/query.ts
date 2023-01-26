// @ts-check
import { POST,gql } from "../utilities/index.js"
import type { ToBeReturnData } from "../types"

/** List of the shop's articles.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'query: string' // KEY:query TYPE: string REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false
* @example const inputString = 'sortKey: any' // KEY:sortKey TYPE: any REQUIRED:false */

export async function articles(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        articles(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Fetch a specific Blog by one of its unique attributes.
* @example const inputString = 'handle: string' // KEY:handle TYPE: string REQUIRED:false
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:false */

export async function blog(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        blog(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** List of the shop's blogs.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'query: string' // KEY:query TYPE: string REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false
* @example const inputString = 'sortKey: any' // KEY:sortKey TYPE: any REQUIRED:false */

export async function blogs(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        blogs(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Retrieve a cart by its ID. For more information, refer to
Manage a cart with the Storefront API.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function cart(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        cart(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Fetch a specific Collection by one of its unique attributes.
* @example const inputString = 'handle: string' // KEY:handle TYPE: string REQUIRED:false
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:false */

export async function collection(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        collection(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** List of the shop’s collections.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'query: string' // KEY:query TYPE: string REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false
* @example const inputString = 'sortKey: any' // KEY:sortKey TYPE: any REQUIRED:false */

export async function collections(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        collections(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Find a customer by its access token.
* @example const inputString = 'customerAccessToken: string' // KEY:customerAccessToken TYPE: string REQUIRED:true */

export async function customer(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        customer(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns the localized experiences configured for the shop. */

export async function localization(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        localization${dataToReturn}
    }`
    return POST(query,variables)
}

/** List of the shop's locations that support in-store pickup.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'near: any' // KEY:near TYPE: any REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false
* @example const inputString = 'sortKey: any' // KEY:sortKey TYPE: any REQUIRED:false */

export async function locations(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        locations(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** A storefront menu.
* @example const inputString = 'handle: string' // KEY:handle TYPE: string REQUIRED:true */

export async function menu(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        menu(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Fetch a specific Metaobject by one of its unique identifiers.
* @example const inputString = 'handle: any' // KEY:handle TYPE: any REQUIRED:false
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:false */

export async function metaobject(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        metaobject(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** All active metaobjects for the shop.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false
* @example const inputString = 'sortKey: string' // KEY:sortKey TYPE: string REQUIRED:false
* @example const inputString = 'type: string' // KEY:type TYPE: string REQUIRED:true */

export async function metaobjects(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        metaobjects(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a specific node by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function node(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        node(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns the list of nodes with the given IDs.
* @example const inputString = 'ids:[ string' // KEY:ids TYPE:[ string REQUIRED:true */

export async function nodes(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        nodes(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Fetch a specific Page by one of its unique attributes.
* @example const inputString = 'handle: string' // KEY:handle TYPE: string REQUIRED:false
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:false */

export async function page(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        page(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** List of the shop's pages.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'query: string' // KEY:query TYPE: string REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false
* @example const inputString = 'sortKey: any' // KEY:sortKey TYPE: any REQUIRED:false */

export async function pages(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        pages(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Fetch a specific Product by one of its unique attributes.
* @example const inputString = 'handle: string' // KEY:handle TYPE: string REQUIRED:false
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:false */

export async function product(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        product(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Find recommended products related to a given product_id.
To learn more about how recommendations are generated, see
Showing product recommendations on product pages.
* @example const inputString = 'productId: string' // KEY:productId TYPE: string REQUIRED:true */

export async function productRecommendations(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        productRecommendations(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Tags added to products.
Additional access scope required: unauthenticated_read_product_tags.
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:true */

export async function productTags(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        productTags(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** List of product types for the shop's products that are published to your app.
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:true */

export async function productTypes(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        productTypes(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** List of the shop’s products.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'query: string' // KEY:query TYPE: string REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false
* @example const inputString = 'sortKey: any' // KEY:sortKey TYPE: any REQUIRED:false */

export async function products(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        products(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** The list of public Storefront API versions, including supported, release candidate and unstable versions. */

export async function publicApiVersions(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        publicApiVersions${dataToReturn}
    }`
    return POST(query,variables)
}

/** The shop associated with the storefront access token. */

export async function shop(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        shop${dataToReturn}
    }`
    return POST(query,variables)
}

/** A list of redirects for a shop.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'query: string' // KEY:query TYPE: string REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false */

export async function urlRedirects(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        urlRedirects(${input})${dataToReturn}
    }`
    return POST(query,variables)
}