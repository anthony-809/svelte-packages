import { SHOPIFY_STORE_URL,SHOPIFY_STORE_ADMIN_TOKEN } from "$env/static/private"
export { generateTypes } from "./generateTypes"
import type { FetchData,FetchResponseData } from "../types"

/** Make request to shopify GraphQl api
* @param {string} query - GraphQl query
* @param {Object} variables - GraphQl variables */ 

export async function POST(query:string,variables:Object){    
    const API_URL = `${SHOPIFY_STORE_URL}/admin/api/2023-01/graphql.json`  
    const fetchData:FetchData = { method:"POST", headers:{}, body:JSON.stringify({query,variables}) }
    fetchData['method'] = "POST"
    fetchData['headers']["user-agent"] = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36"
    fetchData['headers']["Content-Type"] = "application/json"
    fetchData['headers']["X-Shopify-Access-Token"] = `${SHOPIFY_STORE_ADMIN_TOKEN}`
    const apiRequest = await fetch(API_URL,fetchData)
    const apiResponse:any = await apiRequest.json()
    if(typeof apiResponse === "object" && apiResponse.errors){
        const errorResponse:FetchResponseData = { data:apiResponse.errors[0],error:true }
        return errorResponse
    }else{
        const response:FetchResponseData = { data:apiResponse.data,error:false }
        return response
    }
}

/** If using vscode extension for GraphQl using gql */
export const gql = String.raw as any