## SvelteFy | A package to use Shopify GraphQl the svelte way
#### Things to do before using package
Make sure you create a ```.env``` file and set the following variables
```bash
# SHOPIFY STORE URL (PUBLIC)
SHOPIFY_STORE_URL="https://store.myshopify.com"
PUBLIC_SHOPIFY_STORE_URL="https://store.myshopify.com"
# SHOPIFY CLIENT / STORE FRONT TOKEN (PUBLIC)
SHOPIFY_STORE_TOKEN="token_here_yes_here_lol"
PUBLIC_SHOPIFY_STORE_TOKEN="token_here_yes_here_lol" 
# SHOPIFY ADMIN TOKEN (SECURE)
SHOPIFY_STORE_ADMIN_TOKEN = "token_here_yes_here_lol"
```
### Import package
You can import client/public,server (client but server side) or admin (server side)
Import client
``` typescript
import SvelteFy from "svelteFy";
```
Import client (server side)
``` typescript
import SvelteFy from "svelteFy/server";
```
Import admin (server side)
``` typescript
import SvelteFy from "svelteFy/admin";
```
From ```svelteFy/server``` and ```svelteFy/admin``` you can import the function ```generateTypes``` to generate types for response
``` typescript
import SvelteFy, { generateTypes } from "svelteFy/server";
// Or
import SvelteFy, { generateTypes } from "svelteFy/admin";
```
How to query data
``` typescript
import SvelteFy, { gql,generateTypes } from "svelteFy/server";
// Input for GraphQl request / parameters for function
const input = `handle:"product-handle"`
// Variables for GraphQl request
const variables = {}
// Data to return from GraphQl request
const dataToReturn = gql`{ title id handle }`
// GraphQl response
const response = await SvelteFy.query.product(input,variables,returnData)
```
Always check to see if you got any error using response.error:```boolean```
Good response
``` typescript
{
    "data": {
        "product": {
            "id": "gid://shopify/Product/6864601907223",
            "title": "HarmonyPlug"
        }
    },
    "error": false
}
```
Bad response
``` typescript
{
    "data": {
        "message": "Parse error on \"product-handle\" (STRING) at [2, 25]",
        "locations": [
            {
                "line": 2,
                "column": 25
            }
        ]
    },
    "error": true
}
```
NO COMPLETED