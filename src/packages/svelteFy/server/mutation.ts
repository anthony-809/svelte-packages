// @ts-check
import { POST,gql } from "../utilities/server.js"
import type { ToBeReturnData } from "../types"

/** Updates the attributes on a cart.
* @example const inputString = 'attributes:[ any' // KEY:attributes TYPE:[ any REQUIRED:true
* @example const inputString = 'cartId: string' // KEY:cartId TYPE: string REQUIRED:true */

export async function cartAttributesUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        cartAttributesUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates customer information associated with a cart.
Buyer identity is used to determine
international pricing
and should match the customer's shipping address.
* @example const inputString = 'cartId: string' // KEY:cartId TYPE: string REQUIRED:true
* @example const inputString = 'buyerIdentity: any' // KEY:buyerIdentity TYPE: any REQUIRED:true */

export async function cartBuyerIdentityUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        cartBuyerIdentityUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a new cart.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:false */

export async function cartCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        cartCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates the discount codes applied to the cart.
* @example const inputString = 'cartId: string' // KEY:cartId TYPE: string REQUIRED:true
* @example const inputString = 'discountCodes:[ string' // KEY:discountCodes TYPE:[ string REQUIRED:true */

export async function cartDiscountCodesUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        cartDiscountCodesUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Adds a merchandise line to the cart.
* @example const inputString = 'lines:[ any' // KEY:lines TYPE:[ any REQUIRED:true
* @example const inputString = 'cartId: string' // KEY:cartId TYPE: string REQUIRED:true */

export async function cartLinesAdd(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        cartLinesAdd(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Removes one or more merchandise lines from the cart.
* @example const inputString = 'cartId: string' // KEY:cartId TYPE: string REQUIRED:true
* @example const inputString = 'lineIds:[ string' // KEY:lineIds TYPE:[ string REQUIRED:true */

export async function cartLinesRemove(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        cartLinesRemove(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates one or more merchandise lines on a cart.
* @example const inputString = 'cartId: string' // KEY:cartId TYPE: string REQUIRED:true
* @example const inputString = 'lines:[ any' // KEY:lines TYPE:[ any REQUIRED:true */

export async function cartLinesUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        cartLinesUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates the note on the cart.
* @example const inputString = 'cartId: string' // KEY:cartId TYPE: string REQUIRED:true
* @example const inputString = 'note: string' // KEY:note TYPE: string REQUIRED:false */

export async function cartNoteUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        cartNoteUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Update the selected delivery options for a delivery group.
* @example const inputString = 'cartId: string' // KEY:cartId TYPE: string REQUIRED:true
* @example const inputString = 'selectedDeliveryOptions:[ any' // KEY:selectedDeliveryOptions TYPE:[ any REQUIRED:true */

export async function cartSelectedDeliveryOptionsUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        cartSelectedDeliveryOptionsUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates the attributes of a checkout if allowPartialAddresses is true.
* @example const inputString = 'checkoutId: string' // KEY:checkoutId TYPE: string REQUIRED:true
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function checkoutAttributesUpdateV2(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        checkoutAttributesUpdateV2(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Completes a checkout without providing payment information. You can use this mutation for free items or items whose purchase price is covered by a gift card.
* @example const inputString = 'checkoutId: string' // KEY:checkoutId TYPE: string REQUIRED:true */

export async function checkoutCompleteFree(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        checkoutCompleteFree(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Completes a checkout using a credit card token from Shopify's card vault. Before you can complete checkouts using CheckoutCompleteWithCreditCardV2, you need to request payment processing.
* @example const inputString = 'checkoutId: string' // KEY:checkoutId TYPE: string REQUIRED:true
* @example const inputString = 'payment: any' // KEY:payment TYPE: any REQUIRED:true */

export async function checkoutCompleteWithCreditCardV2(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        checkoutCompleteWithCreditCardV2(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Completes a checkout with a tokenized payment.
* @example const inputString = 'checkoutId: string' // KEY:checkoutId TYPE: string REQUIRED:true
* @example const inputString = 'payment: any' // KEY:payment TYPE: any REQUIRED:true */

export async function checkoutCompleteWithTokenizedPaymentV3(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        checkoutCompleteWithTokenizedPaymentV3(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a new checkout.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true
* @example const inputString = 'queueToken: string' // KEY:queueToken TYPE: string REQUIRED:false */

export async function checkoutCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        checkoutCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Associates a customer to the checkout.
* @example const inputString = 'checkoutId: string' // KEY:checkoutId TYPE: string REQUIRED:true
* @example const inputString = 'customerAccessToken: string' // KEY:customerAccessToken TYPE: string REQUIRED:true */

export async function checkoutCustomerAssociateV2(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        checkoutCustomerAssociateV2(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Disassociates the current checkout customer from the checkout.
* @example const inputString = 'checkoutId: string' // KEY:checkoutId TYPE: string REQUIRED:true */

export async function checkoutCustomerDisassociateV2(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        checkoutCustomerDisassociateV2(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Applies a discount to an existing checkout using a discount code.
* @example const inputString = 'discountCode: string' // KEY:discountCode TYPE: string REQUIRED:true
* @example const inputString = 'checkoutId: string' // KEY:checkoutId TYPE: string REQUIRED:true */

export async function checkoutDiscountCodeApplyV2(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        checkoutDiscountCodeApplyV2(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Removes the applied discounts from an existing checkout.
* @example const inputString = 'checkoutId: string' // KEY:checkoutId TYPE: string REQUIRED:true */

export async function checkoutDiscountCodeRemove(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        checkoutDiscountCodeRemove(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates the email on an existing checkout.
* @example const inputString = 'checkoutId: string' // KEY:checkoutId TYPE: string REQUIRED:true
* @example const inputString = 'email: string' // KEY:email TYPE: string REQUIRED:true */

export async function checkoutEmailUpdateV2(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        checkoutEmailUpdateV2(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Removes an applied gift card from the checkout.
* @example const inputString = 'appliedGiftCardId: string' // KEY:appliedGiftCardId TYPE: string REQUIRED:true
* @example const inputString = 'checkoutId: string' // KEY:checkoutId TYPE: string REQUIRED:true */

export async function checkoutGiftCardRemoveV2(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        checkoutGiftCardRemoveV2(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Appends gift cards to an existing checkout.
* @example const inputString = 'giftCardCodes:[ string' // KEY:giftCardCodes TYPE:[ string REQUIRED:true
* @example const inputString = 'checkoutId: string' // KEY:checkoutId TYPE: string REQUIRED:true */

export async function checkoutGiftCardsAppend(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        checkoutGiftCardsAppend(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Adds a list of line items to a checkout.
* @example const inputString = 'lineItems:[ any' // KEY:lineItems TYPE:[ any REQUIRED:true
* @example const inputString = 'checkoutId: string' // KEY:checkoutId TYPE: string REQUIRED:true */

export async function checkoutLineItemsAdd(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        checkoutLineItemsAdd(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Removes line items from an existing checkout.
* @example const inputString = 'checkoutId: string' // KEY:checkoutId TYPE: string REQUIRED:true
* @example const inputString = 'lineItemIds:[ string' // KEY:lineItemIds TYPE:[ string REQUIRED:true */

export async function checkoutLineItemsRemove(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        checkoutLineItemsRemove(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Sets a list of line items to a checkout.
* @example const inputString = 'lineItems:[ any' // KEY:lineItems TYPE:[ any REQUIRED:true
* @example const inputString = 'checkoutId: string' // KEY:checkoutId TYPE: string REQUIRED:true */

export async function checkoutLineItemsReplace(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        checkoutLineItemsReplace(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates line items on a checkout.
* @example const inputString = 'checkoutId: string' // KEY:checkoutId TYPE: string REQUIRED:true
* @example const inputString = 'lineItems:[ any' // KEY:lineItems TYPE:[ any REQUIRED:true */

export async function checkoutLineItemsUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        checkoutLineItemsUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates the shipping address of an existing checkout.
* @example const inputString = 'shippingAddress: any' // KEY:shippingAddress TYPE: any REQUIRED:true
* @example const inputString = 'checkoutId: string' // KEY:checkoutId TYPE: string REQUIRED:true */

export async function checkoutShippingAddressUpdateV2(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        checkoutShippingAddressUpdateV2(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates the shipping lines on an existing checkout.
* @example const inputString = 'checkoutId: string' // KEY:checkoutId TYPE: string REQUIRED:true
* @example const inputString = 'shippingRateHandle: string' // KEY:shippingRateHandle TYPE: string REQUIRED:true */

export async function checkoutShippingLineUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        checkoutShippingLineUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a customer access token.
The customer access token is required to modify the customer object in any way.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function customerAccessTokenCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        customerAccessTokenCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a customer access token using a
multipass token instead of email and
password. A customer record is created if the customer doesn't exist. If a customer
record already exists but the record is disabled, then the customer record is enabled.
* @example const inputString = 'multipassToken: string' // KEY:multipassToken TYPE: string REQUIRED:true */

export async function customerAccessTokenCreateWithMultipass(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        customerAccessTokenCreateWithMultipass(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Permanently destroys a customer access token.
* @example const inputString = 'customerAccessToken: string' // KEY:customerAccessToken TYPE: string REQUIRED:true */

export async function customerAccessTokenDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        customerAccessTokenDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Renews a customer access token.
* @example const inputString = 'customerAccessToken: string' // KEY:customerAccessToken TYPE: string REQUIRED:true */

export async function customerAccessTokenRenew(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        customerAccessTokenRenew(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Activates a customer.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function customerActivate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        customerActivate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Activates a customer with the activation url received from customerCreate.
* @example const inputString = 'activationUrl: any' // KEY:activationUrl TYPE: any REQUIRED:true
* @example const inputString = 'password: string' // KEY:password TYPE: string REQUIRED:true */

export async function customerActivateByUrl(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        customerActivateByUrl(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a new address for a customer.
* @example const inputString = 'customerAccessToken: string' // KEY:customerAccessToken TYPE: string REQUIRED:true
* @example const inputString = 'address: any' // KEY:address TYPE: any REQUIRED:true */

export async function customerAddressCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        customerAddressCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Permanently deletes the address of an existing customer.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'customerAccessToken: string' // KEY:customerAccessToken TYPE: string REQUIRED:true */

export async function customerAddressDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        customerAddressDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates the address of an existing customer.
* @example const inputString = 'customerAccessToken: string' // KEY:customerAccessToken TYPE: string REQUIRED:true
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'address: any' // KEY:address TYPE: any REQUIRED:true */

export async function customerAddressUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        customerAddressUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a new customer.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function customerCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        customerCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates the default address of an existing customer.
* @example const inputString = 'customerAccessToken: string' // KEY:customerAccessToken TYPE: string REQUIRED:true
* @example const inputString = 'addressId: string' // KEY:addressId TYPE: string REQUIRED:true */

export async function customerDefaultAddressUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        customerDefaultAddressUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Sends a reset password email to the customer. The reset password
email contains a reset password URL and token that you can pass to
the customerResetByUrl or
customerReset mutation to reset the
customer password.
* @example const inputString = 'email: string' // KEY:email TYPE: string REQUIRED:true */

export async function customerRecover(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        customerRecover(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** "Resets a customer’s password with the token received from a reset password email. You can send a reset password email with the customerRecover mutation."
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function customerReset(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        customerReset(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** "Resets a customer’s password with the reset password URL received from a reset password email. You can send a reset password email with the customerRecover mutation."
* @example const inputString = 'resetUrl: any' // KEY:resetUrl TYPE: any REQUIRED:true
* @example const inputString = 'password: string' // KEY:password TYPE: string REQUIRED:true */

export async function customerResetByUrl(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        customerResetByUrl(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates an existing customer.
* @example const inputString = 'customerAccessToken: string' // KEY:customerAccessToken TYPE: string REQUIRED:true
* @example const inputString = 'customer: any' // KEY:customer TYPE: any REQUIRED:true */

export async function customerUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        customerUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}