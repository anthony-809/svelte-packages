/** Fetch object data */
export type FetchData = {
    headers: any
    method: "POST" | "GET"
    body: any
}

/** Fetch response object data */
export type FetchResponseData = any

/** Data to be returned from GraphQl */
export type ToBeReturnData = `{${string}}` 