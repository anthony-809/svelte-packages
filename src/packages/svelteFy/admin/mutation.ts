// @ts-check
import { POST,gql } from "../utilities/admin.js"
import type { ToBeReturnData } from "../types"

/** Updates the email state value for an abandonment.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'emailState: any' // KEY:emailState TYPE: any REQUIRED:true
* @example const inputString = 'emailSentAt: any' // KEY:emailSentAt TYPE: any REQUIRED:false
* @example const inputString = 'emailStateChangeReason: string' // KEY:emailStateChangeReason TYPE: string REQUIRED:false */

export async function abandonmentEmailStateUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        abandonmentEmailStateUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Allows an app to create a credit for a shop that can be used towards future app purchases.
* @example const inputString = 'description: string' // KEY:description TYPE: string REQUIRED:true
* @example const inputString = 'amount: any' // KEY:amount TYPE: any REQUIRED:true
* @example const inputString = 'test: boolean' // KEY:test TYPE: boolean REQUIRED:false */

export async function appCreditCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        appCreditCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Charges a shop for features or services one time.
This type of charge is recommended for apps that aren't billed on a recurring basis.
Test and demo shops aren't charged.
* @example const inputString = 'name: string' // KEY:name TYPE: string REQUIRED:true
* @example const inputString = 'price: any' // KEY:price TYPE: any REQUIRED:true
* @example const inputString = 'returnUrl: any' // KEY:returnUrl TYPE: any REQUIRED:true
* @example const inputString = 'test: boolean' // KEY:test TYPE: boolean REQUIRED:false */

export async function appPurchaseOneTimeCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        appPurchaseOneTimeCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a record of the attributed revenue for the app. This mutation should only be used to capture transactions that are not managed by the Billing API.
* @example const inputString = 'appRevenueAttributionRecord: any' // KEY:appRevenueAttributionRecord TYPE: any REQUIRED:true */

export async function appRevenueAttributionRecordCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        appRevenueAttributionRecordCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Deletes a record of the attributed revenue for the app.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function appRevenueAttributionRecordDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        appRevenueAttributionRecordDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Cancels an app subscription on a store.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'prorate: boolean' // KEY:prorate TYPE: boolean REQUIRED:false */

export async function appSubscriptionCancel(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        appSubscriptionCancel(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Allows an app to charge a store for features or services on a recurring basis.
* @example const inputString = 'name: string' // KEY:name TYPE: string REQUIRED:true
* @example const inputString = 'lineItems:[ any' // KEY:lineItems TYPE:[ any REQUIRED:true
* @example const inputString = 'test: boolean' // KEY:test TYPE: boolean REQUIRED:false
* @example const inputString = 'trialDays: number' // KEY:trialDays TYPE: number REQUIRED:false
* @example const inputString = 'returnUrl: any' // KEY:returnUrl TYPE: any REQUIRED:true
* @example const inputString = 'replacementBehavior: any' // KEY:replacementBehavior TYPE: any REQUIRED:false */

export async function appSubscriptionCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        appSubscriptionCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates the capped amount on the usage pricing plan of an app subscription line item.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'cappedAmount: any' // KEY:cappedAmount TYPE: any REQUIRED:true */

export async function appSubscriptionLineItemUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        appSubscriptionLineItemUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Extends the trial of an app subscription.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'days: number' // KEY:days TYPE: number REQUIRED:true */

export async function appSubscriptionTrialExtend(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        appSubscriptionTrialExtend(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Enables an app to charge a store for features or services on a per-use basis.
The usage charge value is counted towards the cappedAmount limit that was specified in the appUsagePricingDetails field when the app subscription was created.
If you create an app usage charge that causes the total usage charges in a billing interval to exceed the capped amount, then a Total price exceeds balance remaining error is returned.
* @example const inputString = 'subscriptionLineItemId: string' // KEY:subscriptionLineItemId TYPE: string REQUIRED:true
* @example const inputString = 'price: any' // KEY:price TYPE: any REQUIRED:true
* @example const inputString = 'description: string' // KEY:description TYPE: string REQUIRED:true */

export async function appUsageRecordCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        appUsageRecordCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Starts the cancelation process of a running bulk operation.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function bulkOperationCancel(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        bulkOperationCancel(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates and runs a bulk operation mutation.
* @example const inputString = 'mutation: string' // KEY:mutation TYPE: string REQUIRED:true
* @example const inputString = 'stagedUploadPath: string' // KEY:stagedUploadPath TYPE: string REQUIRED:true
* @example const inputString = 'clientIdentifier: string' // KEY:clientIdentifier TYPE: string REQUIRED:false */

export async function bulkOperationRunMutation(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        bulkOperationRunMutation(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates and runs a bulk operation query.
* @example const inputString = 'query: string' // KEY:query TYPE: string REQUIRED:true */

export async function bulkOperationRunQuery(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        bulkOperationRunQuery(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates product feedback for multiple products.
* @example const inputString = 'feedbackInput:[ any' // KEY:feedbackInput TYPE:[ any REQUIRED:true */

export async function bulkProductResourceFeedbackCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        bulkProductResourceFeedbackCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Adds products to a collection.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'productIds:[ string' // KEY:productIds TYPE:[ string REQUIRED:true */

export async function collectionAddProducts(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        collectionAddProducts(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Asynchronously adds a set of products to a given collection. It can take a long time to run. Instead of returning a collection, it returns a job which should be polled.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'productIds:[ string' // KEY:productIds TYPE:[ string REQUIRED:true */

export async function collectionAddProductsV2(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        collectionAddProductsV2(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a collection.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function collectionCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        collectionCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Deletes a collection.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function collectionDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        collectionDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Removes a set of products from a given collection. The mutation can take a long time to run. Instead of returning an updated collection the mutation returns a job, which should be polled. For use with manual collections only.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'productIds:[ string' // KEY:productIds TYPE:[ string REQUIRED:true */

export async function collectionRemoveProducts(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        collectionRemoveProducts(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Asynchronously reorders a set of products within a specified collection. Instead of returning an updated collection, this mutation returns a job, which should be polled. The Collection.sortOrder must be MANUAL. Displaced products will have their position altered in a consistent manner, with no gaps.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'moves:[ any' // KEY:moves TYPE:[ any REQUIRED:true */

export async function collectionReorderProducts(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        collectionReorderProducts(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates a collection.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function collectionUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        collectionUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Deletes a list of companies.
* @example const inputString = 'companyIds:[ string' // KEY:companyIds TYPE:[ string REQUIRED:true */

export async function companiesDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        companiesDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Deletes a company address.
* @example const inputString = 'addressId: string' // KEY:addressId TYPE: string REQUIRED:true */

export async function companyAddressDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        companyAddressDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Assigns the customer as a company contact.
* @example const inputString = 'companyId: string' // KEY:companyId TYPE: string REQUIRED:true
* @example const inputString = 'customerId: string' // KEY:customerId TYPE: string REQUIRED:true */

export async function companyAssignCustomerAsContact(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        companyAssignCustomerAsContact(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Assigns the main contact for the company.
* @example const inputString = 'companyId: string' // KEY:companyId TYPE: string REQUIRED:true
* @example const inputString = 'companyContactId: string' // KEY:companyContactId TYPE: string REQUIRED:true */

export async function companyAssignMainContact(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        companyAssignMainContact(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Assigns a role to a contact for a location.
* @example const inputString = 'companyContactId: string' // KEY:companyContactId TYPE: string REQUIRED:true
* @example const inputString = 'companyContactRoleId: string' // KEY:companyContactRoleId TYPE: string REQUIRED:true
* @example const inputString = 'companyLocationId: string' // KEY:companyLocationId TYPE: string REQUIRED:true */

export async function companyContactAssignRole(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        companyContactAssignRole(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Assigns roles on a company contact.
* @example const inputString = 'companyContactId: string' // KEY:companyContactId TYPE: string REQUIRED:true
* @example const inputString = 'rolesToAssign:[ any' // KEY:rolesToAssign TYPE:[ any REQUIRED:true */

export async function companyContactAssignRoles(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        companyContactAssignRoles(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a company contact.
* @example const inputString = 'companyId: string' // KEY:companyId TYPE: string REQUIRED:true
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function companyContactCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        companyContactCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Deletes a company contact.
* @example const inputString = 'companyContactId: string' // KEY:companyContactId TYPE: string REQUIRED:true */

export async function companyContactDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        companyContactDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Revokes a role on a company contact.
* @example const inputString = 'companyContactId: string' // KEY:companyContactId TYPE: string REQUIRED:true
* @example const inputString = 'companyContactRoleAssignmentId: string' // KEY:companyContactRoleAssignmentId TYPE: string REQUIRED:true */

export async function companyContactRevokeRole(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        companyContactRevokeRole(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Revokes roles on a company contact.
* @example const inputString = 'companyContactId: string' // KEY:companyContactId TYPE: string REQUIRED:true
* @example const inputString = 'roleAssignmentIds:[ string' // KEY:roleAssignmentIds TYPE:[ string REQUIRED:true
* @example const inputString = 'revokeAll: boolean' // KEY:revokeAll TYPE: boolean REQUIRED:false */

export async function companyContactRevokeRoles(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        companyContactRevokeRoles(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates a company contact.
* @example const inputString = 'companyContactId: string' // KEY:companyContactId TYPE: string REQUIRED:true
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function companyContactUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        companyContactUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Deletes one or more company contacts.
* @example const inputString = 'companyContactIds:[ string' // KEY:companyContactIds TYPE:[ string REQUIRED:true */

export async function companyContactsDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        companyContactsDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a company.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function companyCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        companyCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Deletes a company.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function companyDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        companyDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates an address on a company location.
* @example const inputString = 'locationId: string' // KEY:locationId TYPE: string REQUIRED:true
* @example const inputString = 'address: any' // KEY:address TYPE: any REQUIRED:true
* @example const inputString = 'addressTypes:[ any' // KEY:addressTypes TYPE:[ any REQUIRED:true */

export async function companyLocationAssignAddress(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        companyLocationAssignAddress(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Assigns roles on a company location.
* @example const inputString = 'companyLocationId: string' // KEY:companyLocationId TYPE: string REQUIRED:true
* @example const inputString = 'rolesToAssign:[ any' // KEY:rolesToAssign TYPE:[ any REQUIRED:true */

export async function companyLocationAssignRoles(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        companyLocationAssignRoles(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Assigns tax exemptions to the company location.
* @example const inputString = 'companyLocationId: string' // KEY:companyLocationId TYPE: string REQUIRED:true
* @example const inputString = 'taxExemptions:[ any' // KEY:taxExemptions TYPE:[ any REQUIRED:true */

export async function companyLocationAssignTaxExemptions(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        companyLocationAssignTaxExemptions(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a company location.
* @example const inputString = 'companyId: string' // KEY:companyId TYPE: string REQUIRED:true
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function companyLocationCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        companyLocationCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a tax registration for a company location.
* @example const inputString = 'locationId: string' // KEY:locationId TYPE: string REQUIRED:true
* @example const inputString = 'taxId: string' // KEY:taxId TYPE: string REQUIRED:true */

export async function companyLocationCreateTaxRegistration(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        companyLocationCreateTaxRegistration(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Deletes a company location.
* @example const inputString = 'companyLocationId: string' // KEY:companyLocationId TYPE: string REQUIRED:true */

export async function companyLocationDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        companyLocationDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Revokes roles on a company location.
* @example const inputString = 'companyLocationId: string' // KEY:companyLocationId TYPE: string REQUIRED:true
* @example const inputString = 'rolesToRevoke:[ string' // KEY:rolesToRevoke TYPE:[ string REQUIRED:true */

export async function companyLocationRevokeRoles(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        companyLocationRevokeRoles(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Revokes tax exemptions from the company location.
* @example const inputString = 'companyLocationId: string' // KEY:companyLocationId TYPE: string REQUIRED:true
* @example const inputString = 'taxExemptions:[ any' // KEY:taxExemptions TYPE:[ any REQUIRED:true */

export async function companyLocationRevokeTaxExemptions(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        companyLocationRevokeTaxExemptions(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Revokes tax registration on a company location.
* @example const inputString = 'companyLocationId: string' // KEY:companyLocationId TYPE: string REQUIRED:true */

export async function companyLocationRevokeTaxRegistration(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        companyLocationRevokeTaxRegistration(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates a company location.
* @example const inputString = 'companyLocationId: string' // KEY:companyLocationId TYPE: string REQUIRED:true
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function companyLocationUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        companyLocationUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Deletes a list of company locations.
* @example const inputString = 'companyLocationIds:[ string' // KEY:companyLocationIds TYPE:[ string REQUIRED:true */

export async function companyLocationsDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        companyLocationsDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Revokes the main contact from the company.
* @example const inputString = 'companyId: string' // KEY:companyId TYPE: string REQUIRED:true */

export async function companyRevokeMainContact(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        companyRevokeMainContact(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates a company.
* @example const inputString = 'companyId: string' // KEY:companyId TYPE: string REQUIRED:true
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function companyUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        companyUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Add tax exemptions for the customer.
* @example const inputString = 'customerId: string' // KEY:customerId TYPE: string REQUIRED:true
* @example const inputString = 'taxExemptions:[ any' // KEY:taxExemptions TYPE:[ any REQUIRED:true */

export async function customerAddTaxExemptions(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        customerAddTaxExemptions(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Create a new customer. As of API version 2022-10, apps using protected customer data must meet the protected customer data requirements.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function customerCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        customerCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Delete a customer. As of API version 2022-10, apps using protected customer data must meet the protected customer data requirements.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function customerDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        customerDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Update a customer's email marketing information information.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function customerEmailMarketingConsentUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        customerEmailMarketingConsentUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Generate an account activation URL for a customer.
* @example const inputString = 'customerId: string' // KEY:customerId TYPE: string REQUIRED:true */

export async function customerGenerateAccountActivationUrl(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        customerGenerateAccountActivationUrl(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a credit card payment method for a customer.
* @example const inputString = 'customerId: string' // KEY:customerId TYPE: string REQUIRED:true
* @example const inputString = 'billingAddress: any' // KEY:billingAddress TYPE: any REQUIRED:true
* @example const inputString = 'sessionId: string' // KEY:sessionId TYPE: string REQUIRED:true */

export async function customerPaymentMethodCreditCardCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        customerPaymentMethodCreditCardCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates the credit card payment method for a customer.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'billingAddress: any' // KEY:billingAddress TYPE: any REQUIRED:true
* @example const inputString = 'sessionId: string' // KEY:sessionId TYPE: string REQUIRED:true */

export async function customerPaymentMethodCreditCardUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        customerPaymentMethodCreditCardUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a URL that allows the customer to update a specific payment method.
* @example const inputString = 'customerPaymentMethodId: string' // KEY:customerPaymentMethodId TYPE: string REQUIRED:true */

export async function customerPaymentMethodGetUpdateUrl(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        customerPaymentMethodGetUpdateUrl(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a PayPal billing agreement for a customer.
* @example const inputString = 'customerId: string' // KEY:customerId TYPE: string REQUIRED:true
* @example const inputString = 'billingAddress: any' // KEY:billingAddress TYPE: any REQUIRED:false
* @example const inputString = 'billingAgreementId: string' // KEY:billingAgreementId TYPE: string REQUIRED:true
* @example const inputString = 'inactive: boolean' // KEY:inactive TYPE: boolean REQUIRED:false */

export async function customerPaymentMethodPaypalBillingAgreementCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        customerPaymentMethodPaypalBillingAgreementCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates a PayPal billing agreement for a customer.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'billingAddress: any' // KEY:billingAddress TYPE: any REQUIRED:true */

export async function customerPaymentMethodPaypalBillingAgreementUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        customerPaymentMethodPaypalBillingAgreementUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Create a payment method from remote gateway identifiers.
* @example const inputString = 'customerId: string' // KEY:customerId TYPE: string REQUIRED:true
* @example const inputString = 'remoteReference: any' // KEY:remoteReference TYPE: any REQUIRED:true */

export async function customerPaymentMethodRemoteCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        customerPaymentMethodRemoteCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Revokes a customer's payment method.
* @example const inputString = 'customerPaymentMethodId: string' // KEY:customerPaymentMethodId TYPE: string REQUIRED:true */

export async function customerPaymentMethodRevoke(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        customerPaymentMethodRevoke(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Sends a link to the customer so they can update a specific payment method.
* @example const inputString = 'customerPaymentMethodId: string' // KEY:customerPaymentMethodId TYPE: string REQUIRED:true
* @example const inputString = 'email: any' // KEY:email TYPE: any REQUIRED:false */

export async function customerPaymentMethodSendUpdateEmail(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        customerPaymentMethodSendUpdateEmail(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Remove tax exemptions from a customer.
* @example const inputString = 'customerId: string' // KEY:customerId TYPE: string REQUIRED:true
* @example const inputString = 'taxExemptions:[ any' // KEY:taxExemptions TYPE:[ any REQUIRED:true */

export async function customerRemoveTaxExemptions(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        customerRemoveTaxExemptions(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Replace tax exemptions for a customer.
* @example const inputString = 'customerId: string' // KEY:customerId TYPE: string REQUIRED:true
* @example const inputString = 'taxExemptions:[ any' // KEY:taxExemptions TYPE:[ any REQUIRED:true */

export async function customerReplaceTaxExemptions(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        customerReplaceTaxExemptions(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a customer segment members query.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function customerSegmentMembersQueryCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        customerSegmentMembersQueryCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Update a customer's SMS marketing consent information.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function customerSmsMarketingConsentUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        customerSmsMarketingConsentUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Update a customer's attributes. As of API version 2022-10, apps using protected customer data must meet the protected customer data requirements.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function customerUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        customerUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates a customer's default address.
* @example const inputString = 'customerId: string' // KEY:customerId TYPE: string REQUIRED:true
* @example const inputString = 'addressId: string' // KEY:addressId TYPE: string REQUIRED:true */

export async function customerUpdateDefaultAddress(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        customerUpdateDefaultAddress(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a delegate access token.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function delegateAccessTokenCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        delegateAccessTokenCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Create a delivery profile.
* @example const inputString = 'profile: any' // KEY:profile TYPE: any REQUIRED:true */

export async function deliveryProfileCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        deliveryProfileCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Enqueue the removal of a delivery profile.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function deliveryProfileRemove(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        deliveryProfileRemove(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Update a delivery profile.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'profile: any' // KEY:profile TYPE: any REQUIRED:true
* @example const inputString = 'leaveLegacyModeProfiles: boolean' // KEY:leaveLegacyModeProfiles TYPE: boolean REQUIRED:false */

export async function deliveryProfileUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        deliveryProfileUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Set the delivery settings for a shop.
* @example const inputString = 'setting: any' // KEY:setting TYPE: any REQUIRED:true */

export async function deliverySettingUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        deliverySettingUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Assigns a location as the shipping origin while using legacy compatibility mode for multi-location delivery profiles.
* @example const inputString = 'locationId: string' // KEY:locationId TYPE: string REQUIRED:true */

export async function deliveryShippingOriginAssign(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        deliveryShippingOriginAssign(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Activates an automatic discount.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function discountAutomaticActivate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        discountAutomaticActivate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates an app discount.
* @example const inputString = 'automaticAppDiscount: any' // KEY:automaticAppDiscount TYPE: any REQUIRED:true */

export async function discountAutomaticAppCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        discountAutomaticAppCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates an automatic app discount.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'automaticAppDiscount: any' // KEY:automaticAppDiscount TYPE: any REQUIRED:true */

export async function discountAutomaticAppUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        discountAutomaticAppUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a basic automatic discount.
* @example const inputString = 'automaticBasicDiscount: any' // KEY:automaticBasicDiscount TYPE: any REQUIRED:true */

export async function discountAutomaticBasicCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        discountAutomaticBasicCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates a basic automatic discount.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'automaticBasicDiscount: any' // KEY:automaticBasicDiscount TYPE: any REQUIRED:true */

export async function discountAutomaticBasicUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        discountAutomaticBasicUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Asynchronously delete automatic discounts in bulk if a search or saved_search_id argument is provided or if a
maximum discount threshold is reached (1,000). Otherwise, deletions will occur inline.
Warning: All automatic discounts will be deleted if a blank search argument is provided.
* @example const inputString = 'search: string' // KEY:search TYPE: string REQUIRED:false
* @example const inputString = 'savedSearchId: string' // KEY:savedSearchId TYPE: string REQUIRED:false
* @example const inputString = 'ids:[ string' // KEY:ids TYPE:[ string REQUIRED:true */

export async function discountAutomaticBulkDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        discountAutomaticBulkDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a BXGY automatic discount.
* @example const inputString = 'automaticBxgyDiscount: any' // KEY:automaticBxgyDiscount TYPE: any REQUIRED:true */

export async function discountAutomaticBxgyCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        discountAutomaticBxgyCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates an existing Buy X, Get Y (BXGY) automatic discount.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'automaticBxgyDiscount: any' // KEY:automaticBxgyDiscount TYPE: any REQUIRED:true */

export async function discountAutomaticBxgyUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        discountAutomaticBxgyUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Deactivates an automatic discount.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function discountAutomaticDeactivate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        discountAutomaticDeactivate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Deletes an automatic discount.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function discountAutomaticDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        discountAutomaticDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Activates a code discount.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function discountCodeActivate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        discountCodeActivate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a code app discount.
* @example const inputString = 'codeAppDiscount: any' // KEY:codeAppDiscount TYPE: any REQUIRED:true */

export async function discountCodeAppCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        discountCodeAppCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates a code app discount.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'codeAppDiscount: any' // KEY:codeAppDiscount TYPE: any REQUIRED:true */

export async function discountCodeAppUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        discountCodeAppUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a basic code discount.
* @example const inputString = 'basicCodeDiscount: any' // KEY:basicCodeDiscount TYPE: any REQUIRED:true */

export async function discountCodeBasicCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        discountCodeBasicCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates a basic code discount.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'basicCodeDiscount: any' // KEY:basicCodeDiscount TYPE: any REQUIRED:true */

export async function discountCodeBasicUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        discountCodeBasicUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Asynchronously activate code discounts in bulk using a search query, a saved search ID, or a list of code discount IDs.
* @example const inputString = 'search: string' // KEY:search TYPE: string REQUIRED:false
* @example const inputString = 'savedSearchId: string' // KEY:savedSearchId TYPE: string REQUIRED:false
* @example const inputString = 'ids:[ string' // KEY:ids TYPE:[ string REQUIRED:true */

export async function discountCodeBulkActivate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        discountCodeBulkActivate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Asynchronously deactivate code discounts in bulk using a search query, a saved search ID, or a list of code discount IDs.
* @example const inputString = 'search: string' // KEY:search TYPE: string REQUIRED:false
* @example const inputString = 'savedSearchId: string' // KEY:savedSearchId TYPE: string REQUIRED:false
* @example const inputString = 'ids:[ string' // KEY:ids TYPE:[ string REQUIRED:true */

export async function discountCodeBulkDeactivate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        discountCodeBulkDeactivate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Asynchronously delete code discounts in bulk using a search query, a saved search ID, or a list of code discount IDs.
* @example const inputString = 'search: string' // KEY:search TYPE: string REQUIRED:false
* @example const inputString = 'savedSearchId: string' // KEY:savedSearchId TYPE: string REQUIRED:false
* @example const inputString = 'ids:[ string' // KEY:ids TYPE:[ string REQUIRED:true */

export async function discountCodeBulkDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        discountCodeBulkDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a Buy X get Y (BXGY) code discount.
* @example const inputString = 'bxgyCodeDiscount: any' // KEY:bxgyCodeDiscount TYPE: any REQUIRED:true */

export async function discountCodeBxgyCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        discountCodeBxgyCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates a Buy X, Get Y (BXGY) code discount.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'bxgyCodeDiscount: any' // KEY:bxgyCodeDiscount TYPE: any REQUIRED:true */

export async function discountCodeBxgyUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        discountCodeBxgyUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Deactivates a code discount.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function discountCodeDeactivate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        discountCodeDeactivate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Deletes a code discount.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function discountCodeDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        discountCodeDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a free shipping code discount.
* @example const inputString = 'freeShippingCodeDiscount: any' // KEY:freeShippingCodeDiscount TYPE: any REQUIRED:true */

export async function discountCodeFreeShippingCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        discountCodeFreeShippingCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates a free shipping code discount.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'freeShippingCodeDiscount: any' // KEY:freeShippingCodeDiscount TYPE: any REQUIRED:true */

export async function discountCodeFreeShippingUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        discountCodeFreeShippingUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Asynchronously delete discount redeem codes in bulk. Specify the redeem codes to delete by providing a
search query, a saved search ID, or a list of redeem code IDs.
* @example const inputString = 'discountId: string' // KEY:discountId TYPE: string REQUIRED:true
* @example const inputString = 'search: string' // KEY:search TYPE: string REQUIRED:false
* @example const inputString = 'savedSearchId: string' // KEY:savedSearchId TYPE: string REQUIRED:false
* @example const inputString = 'ids:[ string' // KEY:ids TYPE:[ string REQUIRED:true */

export async function discountCodeRedeemCodeBulkDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        discountCodeRedeemCodeBulkDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Asynchronously add discount redeem codes in bulk. Specify the codes to add
and the discount code ID that the codes will belong to.
* @example const inputString = 'discountId: string' // KEY:discountId TYPE: string REQUIRED:true
* @example const inputString = 'codes:[ any' // KEY:codes TYPE:[ any REQUIRED:true */

export async function discountRedeemCodeBulkAdd(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        discountRedeemCodeBulkAdd(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates a dispute evidence.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function disputeEvidenceUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        disputeEvidenceUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Adds tags to multiple draft orders.
* @example const inputString = 'search: string' // KEY:search TYPE: string REQUIRED:false
* @example const inputString = 'savedSearchId: string' // KEY:savedSearchId TYPE: string REQUIRED:false
* @example const inputString = 'ids:[ string' // KEY:ids TYPE:[ string REQUIRED:true
* @example const inputString = 'tags:[ string' // KEY:tags TYPE:[ string REQUIRED:true */

export async function draftOrderBulkAddTags(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        draftOrderBulkAddTags(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Deletes multiple draft orders.
* @example const inputString = 'search: string' // KEY:search TYPE: string REQUIRED:false
* @example const inputString = 'savedSearchId: string' // KEY:savedSearchId TYPE: string REQUIRED:false
* @example const inputString = 'ids:[ string' // KEY:ids TYPE:[ string REQUIRED:true */

export async function draftOrderBulkDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        draftOrderBulkDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Removes tags from multiple draft orders.
* @example const inputString = 'search: string' // KEY:search TYPE: string REQUIRED:false
* @example const inputString = 'savedSearchId: string' // KEY:savedSearchId TYPE: string REQUIRED:false
* @example const inputString = 'ids:[ string' // KEY:ids TYPE:[ string REQUIRED:true
* @example const inputString = 'tags:[ string' // KEY:tags TYPE:[ string REQUIRED:true */

export async function draftOrderBulkRemoveTags(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        draftOrderBulkRemoveTags(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Calculates the properties of a draft order. Useful for determining information
such as total taxes or price without actually creating a draft order.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function draftOrderCalculate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        draftOrderCalculate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Completes a draft order and creates an order.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'paymentPending: boolean' // KEY:paymentPending TYPE: boolean REQUIRED:false
* @example const inputString = 'paymentGatewayId: string' // KEY:paymentGatewayId TYPE: string REQUIRED:false
* @example const inputString = 'sourceName: string' // KEY:sourceName TYPE: string REQUIRED:false */

export async function draftOrderComplete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        draftOrderComplete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a draft order.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function draftOrderCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        draftOrderCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a Draft Order from Order.
* @example const inputString = 'orderId: string' // KEY:orderId TYPE: string REQUIRED:true */

export async function draftOrderCreateFromOrder(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        draftOrderCreateFromOrder(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a merchant checkout for the given draft order.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function draftOrderCreateMerchantCheckout(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        draftOrderCreateMerchantCheckout(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Deletes a draft order.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function draftOrderDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        draftOrderDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Duplicates a draft order.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:false */

export async function draftOrderDuplicate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        draftOrderDuplicate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Previews a draft order invoice email.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'email: any' // KEY:email TYPE: any REQUIRED:false */

export async function draftOrderInvoicePreview(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        draftOrderInvoicePreview(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Sends an email invoice for a draft order.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'email: any' // KEY:email TYPE: any REQUIRED:false */

export async function draftOrderInvoiceSend(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        draftOrderInvoiceSend(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates a draft order.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function draftOrderUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        draftOrderUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a new Amazon EventBridge webhook subscription.
* @example const inputString = 'topic: any' // KEY:topic TYPE: any REQUIRED:true
* @example const inputString = 'webhookSubscription: any' // KEY:webhookSubscription TYPE: any REQUIRED:true */

export async function eventBridgeWebhookSubscriptionCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        eventBridgeWebhookSubscriptionCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates an Amazon EventBridge webhook subscription.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'webhookSubscription: any' // KEY:webhookSubscription TYPE: any REQUIRED:true */

export async function eventBridgeWebhookSubscriptionUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        eventBridgeWebhookSubscriptionUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates file assets using an external URL or for files that were previously uploaded using the
stagedUploadsCreate mutation.
These files are added to the Files page in Shopify admin.
* @example const inputString = 'files:[ any' // KEY:files TYPE:[ any REQUIRED:true */

export async function fileCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        fileCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Deletes existing file assets that were uploaded to Shopify.
* @example const inputString = 'fileIds:[ string' // KEY:fileIds TYPE:[ string REQUIRED:true */

export async function fileDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        fileDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates an existing file asset that was uploaded to Shopify.
* @example const inputString = 'files:[ any' // KEY:files TYPE:[ any REQUIRED:true */

export async function fileUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        fileUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Triggers any workflows that begin with the trigger specified in the request body. To learn more, refer to Create Shopify Flow triggers.
* @example const inputString = 'body: string' // KEY:body TYPE: string REQUIRED:true */

export async function flowTriggerReceive(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        flowTriggerReceive(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Cancels a fulfillment.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function fulfillmentCancel(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        fulfillmentCancel(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a fulfillment for one or many fulfillment orders.
The fulfillment orders are associated with the same order and are assigned to the same location.
* @example const inputString = 'fulfillment: any' // KEY:fulfillment TYPE: any REQUIRED:true
* @example const inputString = 'message: string' // KEY:message TYPE: string REQUIRED:false */

export async function fulfillmentCreateV2(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        fulfillmentCreateV2(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a fulfillment event for a specified fulfillment.
* @example const inputString = 'fulfillmentEvent: any' // KEY:fulfillmentEvent TYPE: any REQUIRED:true */

export async function fulfillmentEventCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        fulfillmentEventCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Accept a cancellation request sent to a fulfillment service for a fulfillment order.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'message: string' // KEY:message TYPE: string REQUIRED:false */

export async function fulfillmentOrderAcceptCancellationRequest(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        fulfillmentOrderAcceptCancellationRequest(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Accepts a fulfillment request sent to a fulfillment service for a fulfillment order.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'message: string' // KEY:message TYPE: string REQUIRED:false */

export async function fulfillmentOrderAcceptFulfillmentRequest(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        fulfillmentOrderAcceptFulfillmentRequest(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Marks a fulfillment order as canceled.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function fulfillmentOrderCancel(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        fulfillmentOrderCancel(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Marks an in-progress fulfillment order as incomplete, indicating the fulfillment service is unable to ship any remaining items and intends to close the fulfillment order.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'message: string' // KEY:message TYPE: string REQUIRED:false */

export async function fulfillmentOrderClose(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        fulfillmentOrderClose(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Applies a fulfillment hold on an open fulfillment order.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'fulfillmentHold: any' // KEY:fulfillmentHold TYPE: any REQUIRED:true */

export async function fulfillmentOrderHold(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        fulfillmentOrderHold(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Mark line items associated with a fulfillment order as being ready for pickup by a customer.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function fulfillmentOrderLineItemsPreparedForPickup(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        fulfillmentOrderLineItemsPreparedForPickup(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Moves a fulfillment order to a new location.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'newLocationId: string' // KEY:newLocationId TYPE: string REQUIRED:true */

export async function fulfillmentOrderMove(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        fulfillmentOrderMove(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Marks a scheduled fulfillment order as open.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function fulfillmentOrderOpen(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        fulfillmentOrderOpen(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Rejects a cancellation request sent to a fulfillment service for a fulfillment order.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'message: string' // KEY:message TYPE: string REQUIRED:false */

export async function fulfillmentOrderRejectCancellationRequest(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        fulfillmentOrderRejectCancellationRequest(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Rejects a fulfillment request sent to a fulfillment service for a fulfillment order.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'reason: any' // KEY:reason TYPE: any REQUIRED:false
* @example const inputString = 'message: string' // KEY:message TYPE: string REQUIRED:false
* @example const inputString = 'lineItems:[ any' // KEY:lineItems TYPE:[ any REQUIRED:true */

export async function fulfillmentOrderRejectFulfillmentRequest(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        fulfillmentOrderRejectFulfillmentRequest(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Releases the fulfillment hold on a fulfillment order.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'externalId: string' // KEY:externalId TYPE: string REQUIRED:false */

export async function fulfillmentOrderReleaseHold(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        fulfillmentOrderReleaseHold(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Reschedules a scheduled fulfillment order.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'fulfillAt: any' // KEY:fulfillAt TYPE: any REQUIRED:true */

export async function fulfillmentOrderReschedule(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        fulfillmentOrderReschedule(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Sends a cancellation request to the fulfillment service of a fulfillment order.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'message: string' // KEY:message TYPE: string REQUIRED:false */

export async function fulfillmentOrderSubmitCancellationRequest(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        fulfillmentOrderSubmitCancellationRequest(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Sends a fulfillment request to the fulfillment service of a fulfillment order.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'message: string' // KEY:message TYPE: string REQUIRED:false
* @example const inputString = 'notifyCustomer: boolean' // KEY:notifyCustomer TYPE: boolean REQUIRED:false
* @example const inputString = 'fulfillmentOrderLineItems:[ any' // KEY:fulfillmentOrderLineItems TYPE:[ any REQUIRED:true
* @example const inputString = 'shippingMethod: string' // KEY:shippingMethod TYPE: string REQUIRED:false */

export async function fulfillmentOrderSubmitFulfillmentRequest(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        fulfillmentOrderSubmitFulfillmentRequest(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Releases the fulfillment holds on a list of fulfillment orders.
* @example const inputString = 'ids:[ string' // KEY:ids TYPE:[ string REQUIRED:true
* @example const inputString = 'externalId: string' // KEY:externalId TYPE: string REQUIRED:false */

export async function fulfillmentOrdersReleaseHolds(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        fulfillmentOrdersReleaseHolds(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Sets the latest date and time by which the fulfillment orders need to be fulfilled.
* @example const inputString = 'fulfillmentOrderIds:[ string' // KEY:fulfillmentOrderIds TYPE:[ string REQUIRED:true
* @example const inputString = 'fulfillmentDeadline: any' // KEY:fulfillmentDeadline TYPE: any REQUIRED:true */

export async function fulfillmentOrdersSetFulfillmentDeadline(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        fulfillmentOrdersSetFulfillmentDeadline(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a fulfillment service.
* @example const inputString = 'name: string' // KEY:name TYPE: string REQUIRED:true
* @example const inputString = 'callbackUrl: any' // KEY:callbackUrl TYPE: any REQUIRED:true
* @example const inputString = 'trackingSupport: boolean' // KEY:trackingSupport TYPE: boolean REQUIRED:false
* @example const inputString = 'fulfillmentOrdersOptIn: boolean' // KEY:fulfillmentOrdersOptIn TYPE: boolean REQUIRED:true
* @example const inputString = 'permitsSkuSharing: boolean' // KEY:permitsSkuSharing TYPE: boolean REQUIRED:false
* @example const inputString = 'inventoryManagement: boolean' // KEY:inventoryManagement TYPE: boolean REQUIRED:false */

export async function fulfillmentServiceCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        fulfillmentServiceCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Deletes a fulfillment service.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'destinationLocationId: string' // KEY:destinationLocationId TYPE: string REQUIRED:false */

export async function fulfillmentServiceDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        fulfillmentServiceDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates a fulfillment service.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'name: string' // KEY:name TYPE: string REQUIRED:false
* @example const inputString = 'callbackUrl: any' // KEY:callbackUrl TYPE: any REQUIRED:false
* @example const inputString = 'trackingSupport: boolean' // KEY:trackingSupport TYPE: boolean REQUIRED:false
* @example const inputString = 'fulfillmentOrdersOptIn: boolean' // KEY:fulfillmentOrdersOptIn TYPE: boolean REQUIRED:false
* @example const inputString = 'permitsSkuSharing: boolean' // KEY:permitsSkuSharing TYPE: boolean REQUIRED:false */

export async function fulfillmentServiceUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        fulfillmentServiceUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates tracking information for a fulfillment.
* @example const inputString = 'fulfillmentId: string' // KEY:fulfillmentId TYPE: string REQUIRED:true
* @example const inputString = 'trackingInfoInput: any' // KEY:trackingInfoInput TYPE: any REQUIRED:true
* @example const inputString = 'notifyCustomer: boolean' // KEY:notifyCustomer TYPE: boolean REQUIRED:false */

export async function fulfillmentTrackingInfoUpdateV2(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        fulfillmentTrackingInfoUpdateV2(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Create a gift card.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function giftCardCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        giftCardCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Disable a gift card. A disabled gift card cannot be used by a customer. A disabled gift card cannot be re-enabled.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function giftCardDisable(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        giftCardDisable(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Update a gift card.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function giftCardUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        giftCardUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Activate an inventory item at a location.
* @example const inputString = 'inventoryItemId: string' // KEY:inventoryItemId TYPE: string REQUIRED:true
* @example const inputString = 'locationId: string' // KEY:locationId TYPE: string REQUIRED:true
* @example const inputString = 'available: number' // KEY:available TYPE: number REQUIRED:false
* @example const inputString = 'onHand: number' // KEY:onHand TYPE: number REQUIRED:false */

export async function inventoryActivate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        inventoryActivate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Apply changes to inventory quantities.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function inventoryAdjustQuantities(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        inventoryAdjustQuantities(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Adjusts the inventory by a certain quantity.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function inventoryAdjustQuantity(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        inventoryAdjustQuantity(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Adjusts the inventory at a location for multiple inventory items.
* @example const inputString = 'inventoryItemAdjustments:[ any' // KEY:inventoryItemAdjustments TYPE:[ any REQUIRED:true
* @example const inputString = 'locationId: string' // KEY:locationId TYPE: string REQUIRED:true */

export async function inventoryBulkAdjustQuantityAtLocation(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        inventoryBulkAdjustQuantityAtLocation(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Modify the activation status of an inventory item at locations. Activating an inventory item at a particular location allows that location to stock that inventory item. Deactivating an inventory item at a location removes the inventory item's quantities and turns off the inventory item from that location.
* @example const inputString = 'inventoryItemId: string' // KEY:inventoryItemId TYPE: string REQUIRED:true
* @example const inputString = 'inventoryItemUpdates:[ any' // KEY:inventoryItemUpdates TYPE:[ any REQUIRED:true */

export async function inventoryBulkToggleActivation(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        inventoryBulkToggleActivation(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Removes an inventory item's quantities from a location, and turns off inventory at the location.
* @example const inputString = 'inventoryLevelId: string' // KEY:inventoryLevelId TYPE: string REQUIRED:true */

export async function inventoryDeactivate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        inventoryDeactivate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates an inventory item.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function inventoryItemUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        inventoryItemUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Moves inventory between inventory quantities.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function inventoryMoveQuantities(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        inventoryMoveQuantities(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Set inventory on-hand quantities using absolute values.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function inventorySetOnHandQuantities(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        inventorySetOnHandQuantities(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Activates a location.
* @example const inputString = 'locationId: string' // KEY:locationId TYPE: string REQUIRED:true */

export async function locationActivate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        locationActivate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Adds a new location.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function locationAdd(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        locationAdd(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Deactivates a location and moves inventory, pending orders, and moving transfers to a destination location.
* @example const inputString = 'locationId: string' // KEY:locationId TYPE: string REQUIRED:true
* @example const inputString = 'destinationLocationId: string' // KEY:destinationLocationId TYPE: string REQUIRED:false */

export async function locationDeactivate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        locationDeactivate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Deletes a location.
* @example const inputString = 'locationId: string' // KEY:locationId TYPE: string REQUIRED:true */

export async function locationDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        locationDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Edits an existing location.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function locationEdit(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        locationEdit(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Disables local pickup for a location.
* @example const inputString = 'locationId: string' // KEY:locationId TYPE: string REQUIRED:true */

export async function locationLocalPickupDisable(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        locationLocalPickupDisable(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Enables local pickup for a location.
* @example const inputString = 'localPickupSettings: any' // KEY:localPickupSettings TYPE: any REQUIRED:true */

export async function locationLocalPickupEnable(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        locationLocalPickupEnable(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a new market.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function marketCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        marketCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates currency settings of a market.
* @example const inputString = 'marketId: string' // KEY:marketId TYPE: string REQUIRED:true
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function marketCurrencySettingsUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        marketCurrencySettingsUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Deletes a market definition.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function marketDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        marketDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates or updates market localizations.
* @example const inputString = 'resourceId: string' // KEY:resourceId TYPE: string REQUIRED:true
* @example const inputString = 'marketLocalizations:[ any' // KEY:marketLocalizations TYPE:[ any REQUIRED:true */

export async function marketLocalizationsRegister(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        marketLocalizationsRegister(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Deletes market localizations.
* @example const inputString = 'resourceId: string' // KEY:resourceId TYPE: string REQUIRED:true
* @example const inputString = 'marketLocalizationKeys:[ string' // KEY:marketLocalizationKeys TYPE:[ string REQUIRED:true
* @example const inputString = 'marketIds:[ string' // KEY:marketIds TYPE:[ string REQUIRED:true */

export async function marketLocalizationsRemove(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        marketLocalizationsRemove(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Deletes a market region.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function marketRegionDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        marketRegionDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates regions that belong to an existing market.
* @example const inputString = 'marketId: string' // KEY:marketId TYPE: string REQUIRED:true
* @example const inputString = 'regions:[ any' // KEY:regions TYPE:[ any REQUIRED:true */

export async function marketRegionsCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        marketRegionsCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates the properties of a market.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function marketUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        marketUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a web presence for a market.
* @example const inputString = 'marketId: string' // KEY:marketId TYPE: string REQUIRED:true
* @example const inputString = 'webPresence: any' // KEY:webPresence TYPE: any REQUIRED:true */

export async function marketWebPresenceCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        marketWebPresenceCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Deletes a market web presence.
* @example const inputString = 'marketId: string' // KEY:marketId TYPE: string REQUIRED:true */

export async function marketWebPresenceDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        marketWebPresenceDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates a market web presence.
* @example const inputString = 'marketId: string' // KEY:marketId TYPE: string REQUIRED:true
* @example const inputString = 'webPresence: any' // KEY:webPresence TYPE: any REQUIRED:true */

export async function marketWebPresenceUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        marketWebPresenceUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Create new marketing activity.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function marketingActivityCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        marketingActivityCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a new external marketing activity.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function marketingActivityCreateExternal(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        marketingActivityCreateExternal(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates a marketing activity with the latest information.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function marketingActivityUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        marketingActivityUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Update an external marketing activity.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true
* @example const inputString = 'marketingActivityId: string' // KEY:marketingActivityId TYPE: string REQUIRED:false
* @example const inputString = 'remoteId: string' // KEY:remoteId TYPE: string REQUIRED:false
* @example const inputString = 'utm: any' // KEY:utm TYPE: any REQUIRED:false */

export async function marketingActivityUpdateExternal(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        marketingActivityUpdateExternal(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a new marketing event engagement for a marketing activity.
* @example const inputString = 'marketingActivityId: string' // KEY:marketingActivityId TYPE: string REQUIRED:true
* @example const inputString = 'marketingEngagement: any' // KEY:marketingEngagement TYPE: any REQUIRED:true */

export async function marketingEngagementCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        marketingEngagementCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a metafield definition.
* @example const inputString = 'definition: any' // KEY:definition TYPE: any REQUIRED:true */

export async function metafieldDefinitionCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        metafieldDefinitionCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Delete a metafield definition.
Optionally deletes all associated metafields asynchronously when specified.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'deleteAllAssociatedMetafields: boolean' // KEY:deleteAllAssociatedMetafields TYPE: boolean REQUIRED:false */

export async function metafieldDefinitionDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        metafieldDefinitionDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** You can organize your metafields in your Shopify admin by pinning/unpinning metafield definitions.
The order of your pinned metafield definitions determines the order in which your metafields are displayed
on the corresponding pages in your Shopify admin. By default, only pinned metafields are automatically displayed.
* @example const inputString = 'definitionId: string' // KEY:definitionId TYPE: string REQUIRED:true */

export async function metafieldDefinitionPin(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        metafieldDefinitionPin(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** You can organize your metafields in your Shopify admin by pinning/unpinning metafield definitions.
The order of your pinned metafield definitions determines the order in which your metafields are displayed
on the corresponding pages in your Shopify admin. By default, only pinned metafields are automatically displayed.
* @example const inputString = 'definitionId: string' // KEY:definitionId TYPE: string REQUIRED:true */

export async function metafieldDefinitionUnpin(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        metafieldDefinitionUnpin(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates a metafield definition.
* @example const inputString = 'definition: any' // KEY:definition TYPE: any REQUIRED:true */

export async function metafieldDefinitionUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        metafieldDefinitionUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Deletes a metafield.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function metafieldDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        metafieldDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a MetafieldStorefrontVisibility record to make all metafields that belong to the specified resource
and have the established namespace and key combination visible in the Storefront API.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function metafieldStorefrontVisibilityCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        metafieldStorefrontVisibilityCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Deletes a MetafieldStorefrontVisibility record. All metafields that belongs to the specified record will no
longer be visible in the Storefront API.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function metafieldStorefrontVisibilityDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        metafieldStorefrontVisibilityDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Sets metafield values. Metafield values will be set regardless if they were previously created or not.
* @example const inputString = 'metafields:[ any' // KEY:metafields TYPE:[ any REQUIRED:true */

export async function metafieldsSet(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        metafieldsSet(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Asynchronously delete metaobjects and their associated metafields in bulk.
* @example const inputString = 'where: any' // KEY:where TYPE: any REQUIRED:true */

export async function metaobjectBulkDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        metaobjectBulkDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a new metaobject.
* @example const inputString = 'metaobject: any' // KEY:metaobject TYPE: any REQUIRED:true */

export async function metaobjectCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        metaobjectCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a new metaobject definition.
* @example const inputString = 'definition: any' // KEY:definition TYPE: any REQUIRED:true */

export async function metaobjectDefinitionCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        metaobjectDefinitionCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Deletes the specified metaobject definition.
Also deletes all related metafield definitions, metaobjects, and metafields asynchronously.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function metaobjectDefinitionDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        metaobjectDefinitionDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates a metaobject definition with new settings and metafield definitions.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'definition: any' // KEY:definition TYPE: any REQUIRED:true */

export async function metaobjectDefinitionUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        metaobjectDefinitionUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Deletes the specified metaobject and its associated metafields.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function metaobjectDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        metaobjectDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates an existing metaobject.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'metaobject: any' // KEY:metaobject TYPE: any REQUIRED:true */

export async function metaobjectUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        metaobjectUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Retrieves a metaobject by handle, then updates it with the provided input values.
If no matching metaobject is found, a new metaobject is created with the provided input values.
* @example const inputString = 'handle: any' // KEY:handle TYPE: any REQUIRED:true
* @example const inputString = 'metaobject: any' // KEY:metaobject TYPE: any REQUIRED:true */

export async function metaobjectUpsert(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        metaobjectUpsert(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Captures payment for an authorized transaction on an order. An order can only be captured if it has a successful authorization transaction. Capturing an order will claim the money reserved by the authorization.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function orderCapture(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        orderCapture(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Closes an open order.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function orderClose(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        orderClose(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a payment for an order by mandate.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'paymentScheduleId: string' // KEY:paymentScheduleId TYPE: string REQUIRED:false
* @example const inputString = 'idempotencyKey: string' // KEY:idempotencyKey TYPE: string REQUIRED:true
* @example const inputString = 'mandateId: string' // KEY:mandateId TYPE: string REQUIRED:true
* @example const inputString = 'autoCapture: boolean' // KEY:autoCapture TYPE: boolean REQUIRED:false */

export async function orderCreateMandatePayment(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        orderCreateMandatePayment(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Adds a custom line item to an existing order. For example, you could add a gift wrapping service as a custom line item. To learn how to edit existing orders, refer to Edit an existing order with Admin API.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'title: string' // KEY:title TYPE: string REQUIRED:true
* @example const inputString = 'locationId: string' // KEY:locationId TYPE: string REQUIRED:false
* @example const inputString = 'price: any' // KEY:price TYPE: any REQUIRED:true
* @example const inputString = 'quantity: number' // KEY:quantity TYPE: number REQUIRED:true
* @example const inputString = 'taxable: boolean' // KEY:taxable TYPE: boolean REQUIRED:false
* @example const inputString = 'requiresShipping: boolean' // KEY:requiresShipping TYPE: boolean REQUIRED:false */

export async function orderEditAddCustomItem(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        orderEditAddCustomItem(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Adds a discount to a newly added line item on the current order edit. More information on how to use the GraphQL Admin API to edit an existing order, refer to Edit existing orders.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'lineItemId: string' // KEY:lineItemId TYPE: string REQUIRED:true
* @example const inputString = 'discount: any' // KEY:discount TYPE: any REQUIRED:true */

export async function orderEditAddLineItemDiscount(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        orderEditAddLineItemDiscount(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Adds a line item from an existing product variant.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'variantId: string' // KEY:variantId TYPE: string REQUIRED:true
* @example const inputString = 'locationId: string' // KEY:locationId TYPE: string REQUIRED:false
* @example const inputString = 'quantity: number' // KEY:quantity TYPE: number REQUIRED:true
* @example const inputString = 'allowDuplicates: boolean' // KEY:allowDuplicates TYPE: boolean REQUIRED:false */

export async function orderEditAddVariant(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        orderEditAddVariant(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Starts editing an order. Mutations are operating on OrderEdit.
All order edits start with orderEditBegin, have any number of orderEdit* mutations made, and end with orderEditCommit.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function orderEditBegin(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        orderEditBegin(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Applies and saves staged changes to an order. Mutations are operating on OrderEdit.
All order edits start with orderEditBegin, have any number of orderEdit* mutations made, and end with orderEditCommit.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'notifyCustomer: boolean' // KEY:notifyCustomer TYPE: boolean REQUIRED:false
* @example const inputString = 'staffNote: string' // KEY:staffNote TYPE: string REQUIRED:false */

export async function orderEditCommit(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        orderEditCommit(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Removes a line item discount that was applied as part of an order edit.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'discountApplicationId: string' // KEY:discountApplicationId TYPE: string REQUIRED:true */

export async function orderEditRemoveLineItemDiscount(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        orderEditRemoveLineItemDiscount(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Sets the quantity of a line item on an order that is being edited. More information on how to use the GraphQL Admin API to edit an existing order, refer to Edit existing orders.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'lineItemId: string' // KEY:lineItemId TYPE: string REQUIRED:true
* @example const inputString = 'quantity: number' // KEY:quantity TYPE: number REQUIRED:true
* @example const inputString = 'restock: boolean' // KEY:restock TYPE: boolean REQUIRED:false */

export async function orderEditSetQuantity(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        orderEditSetQuantity(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Sends an email invoice for an order.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'email: any' // KEY:email TYPE: any REQUIRED:false */

export async function orderInvoiceSend(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        orderInvoiceSend(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Marks an order as paid. You can only mark an order as paid if it isn't already fully paid.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function orderMarkAsPaid(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        orderMarkAsPaid(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Opens a closed order.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function orderOpen(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        orderOpen(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates the fields of an order.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function orderUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        orderUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Sends an email payment reminder for a payment schedule.
* @example const inputString = 'paymentScheduleId: string' // KEY:paymentScheduleId TYPE: string REQUIRED:true */

export async function paymentReminderSend(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        paymentReminderSend(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Create payment terms on an order. To create payment terms on a draft order, use a draft order mutation and include the request with the DraftOrderInput.
* @example const inputString = 'referenceId: string' // KEY:referenceId TYPE: string REQUIRED:true
* @example const inputString = 'paymentTermsAttributes: any' // KEY:paymentTermsAttributes TYPE: any REQUIRED:true */

export async function paymentTermsCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        paymentTermsCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Delete payment terms for an order. To delete payment terms on a draft order, use a draft order mutation and include the request with the DraftOrderInput.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function paymentTermsDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        paymentTermsDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Update payment terms on an order. To update payment terms on a draft order, use a draft order mutation and include the request with the DraftOrderInput.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function paymentTermsUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        paymentTermsUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a price list. You can use the priceListCreate mutation to create a new price list for a country. This enables you to sell your products with international pricing.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function priceListCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        priceListCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Deletes a price list. For example, you can delete a price list so that it no longer applies for products in the associated market.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function priceListDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        priceListDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates or updates fixed prices on a price list. You can use the priceListFixedPricesAdd mutation to set a fixed price for specific product variants. This lets you change product variant pricing on a per country basis. Any existing fixed price list prices for these variants will be overwritten.
* @example const inputString = 'priceListId: string' // KEY:priceListId TYPE: string REQUIRED:true
* @example const inputString = 'prices:[ any' // KEY:prices TYPE:[ any REQUIRED:true */

export async function priceListFixedPricesAdd(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        priceListFixedPricesAdd(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Deletes specific fixed prices from a price list using a product variant ID. You can use the priceListFixedPricesDelete mutation to delete a set of fixed prices from a price list. After deleting the set of fixed prices from the price list, the price of each product variant reverts to the original price that was determined by the price list adjustment.
* @example const inputString = 'priceListId: string' // KEY:priceListId TYPE: string REQUIRED:true
* @example const inputString = 'variantIds:[ string' // KEY:variantIds TYPE:[ string REQUIRED:true */

export async function priceListFixedPricesDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        priceListFixedPricesDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates a price list.
If you modify the currency, then any fixed prices set on the price list will be deleted.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function priceListUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        priceListUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Activate a price rule.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function priceRuleActivate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        priceRuleActivate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Create a price rule using the input.
* @example const inputString = 'priceRule: any' // KEY:priceRule TYPE: any REQUIRED:true
* @example const inputString = 'priceRuleDiscountCode: any' // KEY:priceRuleDiscountCode TYPE: any REQUIRED:false */

export async function priceRuleCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        priceRuleCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Deactivate a price rule.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function priceRuleDeactivate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        priceRuleDeactivate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Delete a price rule.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function priceRuleDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        priceRuleDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Create a discount code for a price rule.
* @example const inputString = 'priceRuleId: string' // KEY:priceRuleId TYPE: string REQUIRED:true
* @example const inputString = 'code: string' // KEY:code TYPE: string REQUIRED:true */

export async function priceRuleDiscountCodeCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        priceRuleDiscountCodeCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Update a discount code for a price rule.
* @example const inputString = 'priceRuleId: string' // KEY:priceRuleId TYPE: string REQUIRED:true
* @example const inputString = 'code: string' // KEY:code TYPE: string REQUIRED:true */

export async function priceRuleDiscountCodeUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        priceRuleDiscountCodeUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates a price rule using its ID and an input.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'priceRule: any' // KEY:priceRule TYPE: any REQUIRED:true
* @example const inputString = 'priceRuleDiscountCode: any' // KEY:priceRuleDiscountCode TYPE: any REQUIRED:false */

export async function priceRuleUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        priceRuleUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Deletes a private metafield.
Private metafields are automatically deleted when the app that created them is uninstalled.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function privateMetafieldDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        privateMetafieldDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates or updates a private metafield. Use private metafields when you don't want the metafield data to be accessible by merchants or other apps.
Private metafields are accessible only by the application that created them and only from the GraphQL Admin API.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function privateMetafieldUpsert(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        privateMetafieldUpsert(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Appends images to a product.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function productAppendImages(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        productAppendImages(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Changes the status of a product. This allows you to set the availability of the product across all channels.
* @example const inputString = 'productId: string' // KEY:productId TYPE: string REQUIRED:true
* @example const inputString = 'status: any' // KEY:status TYPE: any REQUIRED:true */

export async function productChangeStatus(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        productChangeStatus(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a product.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true
* @example const inputString = 'media:[ any' // KEY:media TYPE:[ any REQUIRED:true */

export async function productCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        productCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates media for a product.
* @example const inputString = 'productId: string' // KEY:productId TYPE: string REQUIRED:true
* @example const inputString = 'media:[ any' // KEY:media TYPE:[ any REQUIRED:true */

export async function productCreateMedia(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        productCreateMedia(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Deletes a product, including all associated variants and media.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function productDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        productDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Deletes a product asynchronously, including all associated variants and media.
* @example const inputString = 'productId: string' // KEY:productId TYPE: string REQUIRED:true */

export async function productDeleteAsync(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        productDeleteAsync(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Removes product images from the product.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'imageIds:[ string' // KEY:imageIds TYPE:[ string REQUIRED:true */

export async function productDeleteImages(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        productDeleteImages(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Deletes media for a product.
* @example const inputString = 'productId: string' // KEY:productId TYPE: string REQUIRED:true
* @example const inputString = 'mediaIds:[ string' // KEY:mediaIds TYPE:[ string REQUIRED:true */

export async function productDeleteMedia(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        productDeleteMedia(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Duplicates a product.
* @example const inputString = 'productId: string' // KEY:productId TYPE: string REQUIRED:true
* @example const inputString = 'newTitle: string' // KEY:newTitle TYPE: string REQUIRED:true
* @example const inputString = 'newStatus: any' // KEY:newStatus TYPE: any REQUIRED:false
* @example const inputString = 'includeImages: boolean' // KEY:includeImages TYPE: boolean REQUIRED:false */

export async function productDuplicate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        productDuplicate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Asynchronously duplicate a single product.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function productDuplicateAsync(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        productDuplicateAsync(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates an image of a product.
* @example const inputString = 'productId: string' // KEY:productId TYPE: string REQUIRED:true
* @example const inputString = 'image: any' // KEY:image TYPE: any REQUIRED:true */

export async function productImageUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        productImageUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Adds multiple selling plan groups to a product.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'sellingPlanGroupIds:[ string' // KEY:sellingPlanGroupIds TYPE:[ string REQUIRED:true */

export async function productJoinSellingPlanGroups(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        productJoinSellingPlanGroups(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Removes multiple groups from a product.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'sellingPlanGroupIds:[ string' // KEY:sellingPlanGroupIds TYPE:[ string REQUIRED:true */

export async function productLeaveSellingPlanGroups(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        productLeaveSellingPlanGroups(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Asynchronously reorders a set of images for a given product.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'moves:[ any' // KEY:moves TYPE:[ any REQUIRED:true */

export async function productReorderImages(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        productReorderImages(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Asynchronously reorders the media attached to a product.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'moves:[ any' // KEY:moves TYPE:[ any REQUIRED:true */

export async function productReorderMedia(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        productReorderMedia(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates a product. If you update a product and only include some variants in the update,
then any variants not included will be deleted. To safely manage variants without the risk of
deleting excluded variants, use
productVariantsBulkUpdate.
If you want to update a single variant, then use
productVariantUpdate.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function productUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        productUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates media for a product.
* @example const inputString = 'productId: string' // KEY:productId TYPE: string REQUIRED:true
* @example const inputString = 'media:[ any' // KEY:media TYPE:[ any REQUIRED:true */

export async function productUpdateMedia(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        productUpdateMedia(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Appends media from a product to variants of the product.
* @example const inputString = 'productId: string' // KEY:productId TYPE: string REQUIRED:true
* @example const inputString = 'variantMedia:[ any' // KEY:variantMedia TYPE:[ any REQUIRED:true */

export async function productVariantAppendMedia(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        productVariantAppendMedia(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a product variant.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function productVariantCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        productVariantCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Deletes a product variant.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function productVariantDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        productVariantDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Detaches media from product variants.
* @example const inputString = 'productId: string' // KEY:productId TYPE: string REQUIRED:true
* @example const inputString = 'variantMedia:[ any' // KEY:variantMedia TYPE:[ any REQUIRED:true */

export async function productVariantDetachMedia(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        productVariantDetachMedia(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Adds multiple selling plan groups to a product variant.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'sellingPlanGroupIds:[ string' // KEY:sellingPlanGroupIds TYPE:[ string REQUIRED:true */

export async function productVariantJoinSellingPlanGroups(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        productVariantJoinSellingPlanGroups(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Remove multiple groups from a product variant.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'sellingPlanGroupIds:[ string' // KEY:sellingPlanGroupIds TYPE:[ string REQUIRED:true */

export async function productVariantLeaveSellingPlanGroups(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        productVariantLeaveSellingPlanGroups(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates a product variant.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function productVariantUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        productVariantUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates product variants in bulk. If you want to create a single variant, then use
productVariantCreate.
* @example const inputString = 'variants:[ any' // KEY:variants TYPE:[ any REQUIRED:true
* @example const inputString = 'productId: string' // KEY:productId TYPE: string REQUIRED:true */

export async function productVariantsBulkCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        productVariantsBulkCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Deletes product variants in bulk. If you want to delete a single variant, then use
productVariantDelete.
* @example const inputString = 'variantsIds:[ string' // KEY:variantsIds TYPE:[ string REQUIRED:true
* @example const inputString = 'productId: string' // KEY:productId TYPE: string REQUIRED:true */

export async function productVariantsBulkDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        productVariantsBulkDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Reorder product variants in bulk.
* @example const inputString = 'productId: string' // KEY:productId TYPE: string REQUIRED:true
* @example const inputString = 'positions:[ any' // KEY:positions TYPE:[ any REQUIRED:true */

export async function productVariantsBulkReorder(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        productVariantsBulkReorder(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates product variants in bulk. If you want to update a single variant, then use
productVariantUpdate.
* @example const inputString = 'variants:[ any' // KEY:variants TYPE:[ any REQUIRED:true
* @example const inputString = 'productId: string' // KEY:productId TYPE: string REQUIRED:true */

export async function productVariantsBulkUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        productVariantsBulkUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a new Google Cloud Pub/Sub webhook subscription.
* @example const inputString = 'topic: any' // KEY:topic TYPE: any REQUIRED:true
* @example const inputString = 'webhookSubscription: any' // KEY:webhookSubscription TYPE: any REQUIRED:true */

export async function pubSubWebhookSubscriptionCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        pubSubWebhookSubscriptionCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates a Google Cloud Pub/Sub webhook subscription.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'webhookSubscription: any' // KEY:webhookSubscription TYPE: any REQUIRED:false */

export async function pubSubWebhookSubscriptionUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        pubSubWebhookSubscriptionUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Publishes a resource to a channel. If the resource is a product, then it's visible in the channel only if the product status is active. Products that are sold exclusively on subscription (requiresSellingPlan: true) can be published only on online stores.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'input:[ any' // KEY:input TYPE:[ any REQUIRED:true */

export async function publishablePublish(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        publishablePublish(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Publishes a resource to current channel. If the resource is a product, then it's visible in the channel only if the product status is active. Products that are sold exclusively on subscription (requiresSellingPlan: true) can be published only on online stores.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function publishablePublishToCurrentChannel(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        publishablePublishToCurrentChannel(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Unpublishes a resource from a channel. If the resource is a product, then it's visible in the channel only if the product status is active.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'input:[ any' // KEY:input TYPE:[ any REQUIRED:true */

export async function publishableUnpublish(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        publishableUnpublish(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Unpublishes a resource from the current channel. If the resource is a product, then it's visible in the channel only if the product status is active.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function publishableUnpublishToCurrentChannel(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        publishableUnpublishToCurrentChannel(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a refund.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function refundCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        refundCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Approves a customer's return request.
If this mutation is successful, then the Return.status field of the
approved return is set to OPEN.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function returnApproveRequest(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        ReturnApproveRequest(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Cancels a return and restores the items back to being fulfilled.
Canceling a return is only available before any work has been done
on the return (such as an inspection or refund).
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'notifyCustomer: boolean' // KEY:notifyCustomer TYPE: boolean REQUIRED:false */

export async function returnCancel(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        ReturnCancel(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Indicates a return is complete, either when a refund has been made and items restocked,
or simply when it has been marked as returned in the system.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function returnClose(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        ReturnClose(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a return.
* @example const inputString = 'returnInput: any' // KEY:returnInput TYPE: any REQUIRED:true */

export async function returnCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        ReturnCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Declines a return on an order.
When a return is declined, each ReturnLineItem.fulfillmentLineItem can be associated to a new return.
Use the ReturnCreate or ReturnRequest mutation to initiate a new return.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function returnDeclineRequest(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        ReturnDeclineRequest(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Refunds a return and associates it with the related return request.
* @example const inputString = 'returnRefundInput: any' // KEY:returnRefundInput TYPE: any REQUIRED:true */

export async function returnRefund(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        ReturnRefund(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Reopens a closed return.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function returnReopen(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        ReturnReopen(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** A customer's return request that hasn't been approved or declined.
This mutation sets the value of the Return.status field to REQUESTED.
To create a return that has the Return.status field set to OPEN, use the returnCreate mutation.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function returnRequest(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        ReturnRequest(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a new reverse delivery with associated external shipping information.
* @example const inputString = 'reverseFulfillmentOrderId: string' // KEY:reverseFulfillmentOrderId TYPE: string REQUIRED:true
* @example const inputString = 'reverseDeliveryLineItems:[ any' // KEY:reverseDeliveryLineItems TYPE:[ any REQUIRED:true
* @example const inputString = 'trackingInput: any' // KEY:trackingInput TYPE: any REQUIRED:false
* @example const inputString = 'labelInput: any' // KEY:labelInput TYPE: any REQUIRED:false
* @example const inputString = 'notifyCustomer: boolean' // KEY:notifyCustomer TYPE: boolean REQUIRED:false */

export async function reverseDeliveryCreateWithShipping(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        reverseDeliveryCreateWithShipping(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Disposes reverse delivery line items for a reverse delivery on the same shop.
* @example const inputString = 'dispositionInputs:[ any' // KEY:dispositionInputs TYPE:[ any REQUIRED:true */

export async function reverseDeliveryDispose(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        reverseDeliveryDispose(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates a reverse delivery with associated external shipping information.
* @example const inputString = 'reverseDeliveryId: string' // KEY:reverseDeliveryId TYPE: string REQUIRED:true
* @example const inputString = 'trackingInput: any' // KEY:trackingInput TYPE: any REQUIRED:false
* @example const inputString = 'labelInput: any' // KEY:labelInput TYPE: any REQUIRED:false
* @example const inputString = 'notifyCustomer: boolean' // KEY:notifyCustomer TYPE: boolean REQUIRED:false */

export async function reverseDeliveryShippingUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        reverseDeliveryShippingUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Disposes reverse fulfillment order line items.
* @example const inputString = 'dispositionInputs:[ any' // KEY:dispositionInputs TYPE:[ any REQUIRED:true */

export async function reverseFulfillmentOrderDispose(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        reverseFulfillmentOrderDispose(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a saved search.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function savedSearchCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        savedSearchCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Delete a saved search.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function savedSearchDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        savedSearchDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates a saved search.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function savedSearchUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        savedSearchUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Theme app extensions
Your app might not pass App Store review if it uses script tags instead of theme app extensions. All new apps, and apps that integrate with Online Store 2.0 themes, should use theme app extensions, such as app blocks or app embed blocks. Script tags are an alternative you can use with only vintage themes. Learn more.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function scriptTagCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        scriptTagCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Theme app extensions
Your app might not pass App Store review if it uses script tags instead of theme app extensions. All new apps, and apps that integrate with Online Store 2.0 themes, should use theme app extensions, such as app blocks or app embed blocks. Script tags are an alternative you can use with only vintage themes. Learn more.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function scriptTagDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        scriptTagDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Theme app extensions
Your app might not pass App Store review if it uses script tags instead of theme app extensions. All new apps, and apps that integrate with Online Store 2.0 themes, should use theme app extensions, such as app blocks or app embed blocks. Script tags are an alternative you can use with only vintage themes. Learn more.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function scriptTagUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        scriptTagUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a segment.
* @example const inputString = 'name: string' // KEY:name TYPE: string REQUIRED:true
* @example const inputString = 'query: string' // KEY:query TYPE: string REQUIRED:true */

export async function segmentCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        segmentCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Deletes a segment.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function segmentDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        segmentDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates a segment.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'name: string' // KEY:name TYPE: string REQUIRED:false
* @example const inputString = 'query: string' // KEY:query TYPE: string REQUIRED:false */

export async function segmentUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        segmentUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Adds multiple product variants to a selling plan group.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'productVariantIds:[ string' // KEY:productVariantIds TYPE:[ string REQUIRED:true */

export async function sellingPlanGroupAddProductVariants(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        sellingPlanGroupAddProductVariants(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Adds multiple products to a selling plan group.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'productIds:[ string' // KEY:productIds TYPE:[ string REQUIRED:true */

export async function sellingPlanGroupAddProducts(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        sellingPlanGroupAddProducts(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a Selling Plan Group.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true
* @example const inputString = 'resources: any' // KEY:resources TYPE: any REQUIRED:false */

export async function sellingPlanGroupCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        sellingPlanGroupCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Delete a Selling Plan Group.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function sellingPlanGroupDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        sellingPlanGroupDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Removes multiple product variants from a selling plan group.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'productVariantIds:[ string' // KEY:productVariantIds TYPE:[ string REQUIRED:true */

export async function sellingPlanGroupRemoveProductVariants(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        sellingPlanGroupRemoveProductVariants(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Removes multiple products from a selling plan group.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'productIds:[ string' // KEY:productIds TYPE:[ string REQUIRED:true */

export async function sellingPlanGroupRemoveProducts(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        sellingPlanGroupRemoveProducts(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Update a Selling Plan Group.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:false */

export async function sellingPlanGroupUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        sellingPlanGroupUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Deletes a shipping package.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function shippingPackageDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        shippingPackageDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Set a shipping package as the default.
The default shipping package is the one used to calculate shipping costs on checkout.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function shippingPackageMakeDefault(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        shippingPackageMakeDefault(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates a shipping package.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'shippingPackage: any' // KEY:shippingPackage TYPE: any REQUIRED:true */

export async function shippingPackageUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        shippingPackageUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Deletes a locale for a shop. This also deletes all translations of this locale.
* @example const inputString = 'locale: string' // KEY:locale TYPE: string REQUIRED:true */

export async function shopLocaleDisable(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        shopLocaleDisable(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Adds a locale for a shop. The newly added locale is in the unpublished state.
* @example const inputString = 'locale: string' // KEY:locale TYPE: string REQUIRED:true
* @example const inputString = 'marketWebPresenceIds:[ string' // KEY:marketWebPresenceIds TYPE:[ string REQUIRED:true */

export async function shopLocaleEnable(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        shopLocaleEnable(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates a locale for a shop.
* @example const inputString = 'locale: string' // KEY:locale TYPE: string REQUIRED:true
* @example const inputString = 'shopLocale: any' // KEY:shopLocale TYPE: any REQUIRED:true */

export async function shopLocaleUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        shopLocaleUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates a shop policy.
* @example const inputString = 'shopPolicy: any' // KEY:shopPolicy TYPE: any REQUIRED:true */

export async function shopPolicyUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        shopPolicyUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** The ResourceFeedback object lets your app report the status of shops and their resources. For example, if
your app is a marketplace channel, then you can use resource feedback to alert merchants that they need to connect their marketplace account by signing in.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function shopResourceFeedbackCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        shopResourceFeedbackCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates staged upload targets for each input. This is the first step in the upload process.
The returned staged upload targets' URL and parameter fields can be used to send a request
to upload the file described in the corresponding input.
* @example const inputString = 'input:[ any' // KEY:input TYPE:[ any REQUIRED:true */

export async function stagedUploadsCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        stagedUploadsCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Activates the specified standard metafield definition from its template.
* @example const inputString = 'ownerType: any' // KEY:ownerType TYPE: any REQUIRED:true
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:false
* @example const inputString = 'namespace: string' // KEY:namespace TYPE: string REQUIRED:false
* @example const inputString = 'key: string' // KEY:key TYPE: string REQUIRED:false
* @example const inputString = 'pin: boolean' // KEY:pin TYPE: boolean REQUIRED:true
* @example const inputString = 'visibleToStorefrontApi: boolean' // KEY:visibleToStorefrontApi TYPE: boolean REQUIRED:false
* @example const inputString = 'useAsCollectionCondition: boolean' // KEY:useAsCollectionCondition TYPE: boolean REQUIRED:false */

export async function standardMetafieldDefinitionEnable(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        standardMetafieldDefinitionEnable(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Enables the specified standard metaobject definition from its template.
* @example const inputString = 'type: string' // KEY:type TYPE: string REQUIRED:true */

export async function standardMetaobjectDefinitionEnable(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        standardMetaobjectDefinitionEnable(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a storefront access token. An app can have a maximum of 100 active storefront access tokens for each shop.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function storefrontAccessTokenCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        storefrontAccessTokenCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Deletes a storefront access token.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function storefrontAccessTokenDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        storefrontAccessTokenDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a new subscription billing attempt. For more information, refer to Create a subscription contract.
* @example const inputString = 'subscriptionContractId: string' // KEY:subscriptionContractId TYPE: string REQUIRED:true
* @example const inputString = 'subscriptionBillingAttemptInput: any' // KEY:subscriptionBillingAttemptInput TYPE: any REQUIRED:true */

export async function subscriptionBillingAttemptCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        subscriptionBillingAttemptCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Commits the updates of a Subscription Billing Cycle Contract draft.
* @example const inputString = 'draftId: string' // KEY:draftId TYPE: string REQUIRED:true */

export async function subscriptionBillingCycleContractDraftCommit(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        subscriptionBillingCycleContractDraftCommit(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Concatenates a contract to a Subscription Draft.
* @example const inputString = 'draftId: string' // KEY:draftId TYPE: string REQUIRED:true
* @example const inputString = 'concatenatedBillingCycleContracts:[ any' // KEY:concatenatedBillingCycleContracts TYPE:[ any REQUIRED:true */

export async function subscriptionBillingCycleContractDraftConcatenate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        subscriptionBillingCycleContractDraftConcatenate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Edit the contents of a subscription contract for the specified billing cycle.
* @example const inputString = 'billingCycleInput: any' // KEY:billingCycleInput TYPE: any REQUIRED:true */

export async function subscriptionBillingCycleContractEdit(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        subscriptionBillingCycleContractEdit(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Delete the current or future schedule and contract edits of a subscription billing cycle.
* @example const inputString = 'billingCycleInput: any' // KEY:billingCycleInput TYPE: any REQUIRED:true */

export async function subscriptionBillingCycleEditDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        subscriptionBillingCycleEditDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Delete the current or future schedule and contract edits of a list of subscription billing cycles.
* @example const inputString = 'contractId: string' // KEY:contractId TYPE: string REQUIRED:true
* @example const inputString = 'targetSelection: any' // KEY:targetSelection TYPE: any REQUIRED:true */

export async function subscriptionBillingCycleEditsDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        subscriptionBillingCycleEditsDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Modify the schedule of a specific billing cycle.
* @example const inputString = 'billingCycleInput: any' // KEY:billingCycleInput TYPE: any REQUIRED:true
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function subscriptionBillingCycleScheduleEdit(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        subscriptionBillingCycleScheduleEdit(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a Subscription Contract.
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function subscriptionContractCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        subscriptionContractCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Sets the next billing date of a Subscription Contract.
* @example const inputString = 'contractId: string' // KEY:contractId TYPE: string REQUIRED:true
* @example const inputString = 'date: any' // KEY:date TYPE: any REQUIRED:true */

export async function subscriptionContractSetNextBillingDate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        subscriptionContractSetNextBillingDate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates a Subscription Contract.
* @example const inputString = 'contractId: string' // KEY:contractId TYPE: string REQUIRED:true */

export async function subscriptionContractUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        subscriptionContractUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Commits the updates of a Subscription Contract draft.
* @example const inputString = 'draftId: string' // KEY:draftId TYPE: string REQUIRED:true */

export async function subscriptionDraftCommit(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        subscriptionDraftCommit(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Adds a subscription discount to a subscription draft.
* @example const inputString = 'draftId: string' // KEY:draftId TYPE: string REQUIRED:true
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function subscriptionDraftDiscountAdd(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        subscriptionDraftDiscountAdd(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Applies a code discount on the subscription draft.
* @example const inputString = 'draftId: string' // KEY:draftId TYPE: string REQUIRED:true
* @example const inputString = 'redeemCode: string' // KEY:redeemCode TYPE: string REQUIRED:true */

export async function subscriptionDraftDiscountCodeApply(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        subscriptionDraftDiscountCodeApply(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Removes a subscription discount from a subscription draft.
* @example const inputString = 'draftId: string' // KEY:draftId TYPE: string REQUIRED:true
* @example const inputString = 'discountId: string' // KEY:discountId TYPE: string REQUIRED:true */

export async function subscriptionDraftDiscountRemove(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        subscriptionDraftDiscountRemove(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates a subscription discount on a subscription draft.
* @example const inputString = 'draftId: string' // KEY:draftId TYPE: string REQUIRED:true
* @example const inputString = 'discountId: string' // KEY:discountId TYPE: string REQUIRED:true
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function subscriptionDraftDiscountUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        subscriptionDraftDiscountUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Adds a subscription free shipping discount to a subscription draft.
* @example const inputString = 'draftId: string' // KEY:draftId TYPE: string REQUIRED:true
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function subscriptionDraftFreeShippingDiscountAdd(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        subscriptionDraftFreeShippingDiscountAdd(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates a subscription free shipping discount on a subscription draft.
* @example const inputString = 'draftId: string' // KEY:draftId TYPE: string REQUIRED:true
* @example const inputString = 'discountId: string' // KEY:discountId TYPE: string REQUIRED:true
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function subscriptionDraftFreeShippingDiscountUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        subscriptionDraftFreeShippingDiscountUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Adds a subscription line to a subscription draft.
* @example const inputString = 'draftId: string' // KEY:draftId TYPE: string REQUIRED:true
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function subscriptionDraftLineAdd(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        subscriptionDraftLineAdd(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Removes a subscription line from a subscription draft.
* @example const inputString = 'draftId: string' // KEY:draftId TYPE: string REQUIRED:true
* @example const inputString = 'lineId: string' // KEY:lineId TYPE: string REQUIRED:true */

export async function subscriptionDraftLineRemove(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        subscriptionDraftLineRemove(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates a subscription line on a subscription draft.
* @example const inputString = 'draftId: string' // KEY:draftId TYPE: string REQUIRED:true
* @example const inputString = 'lineId: string' // KEY:lineId TYPE: string REQUIRED:true
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function subscriptionDraftLineUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        subscriptionDraftLineUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates a Subscription Draft.
* @example const inputString = 'draftId: string' // KEY:draftId TYPE: string REQUIRED:true
* @example const inputString = 'input: any' // KEY:input TYPE: any REQUIRED:true */

export async function subscriptionDraftUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        subscriptionDraftUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Add tags to an order, a draft order, a customer, a product, or an online store article.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'tags:[ string' // KEY:tags TYPE:[ string REQUIRED:true */

export async function tagsAdd(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        tagsAdd(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Remove tags from an order, a draft order, a customer, a product, or an online store article.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'tags:[ string' // KEY:tags TYPE:[ string REQUIRED:true */

export async function tagsRemove(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        tagsRemove(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates or updates translations.
* @example const inputString = 'resourceId: string' // KEY:resourceId TYPE: string REQUIRED:true
* @example const inputString = 'translations:[ any' // KEY:translations TYPE:[ any REQUIRED:true */

export async function translationsRegister(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        translationsRegister(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Deletes translations.
* @example const inputString = 'resourceId: string' // KEY:resourceId TYPE: string REQUIRED:true
* @example const inputString = 'translationKeys:[ string' // KEY:translationKeys TYPE:[ string REQUIRED:true
* @example const inputString = 'locales:[ string' // KEY:locales TYPE:[ string REQUIRED:true
* @example const inputString = 'marketIds:[ string' // KEY:marketIds TYPE:[ string REQUIRED:true */

export async function translationsRemove(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        translationsRemove(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Asynchronously delete URL redirects in bulk. */

export async function urlRedirectBulkDeleteAll(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        urlRedirectBulkDeleteAll${dataToReturn}
    }`
    return POST(query,variables)
}

/** Asynchronously delete URLRedirect
objects in bulk by IDs.
Learn more about URLRedirect
objects.
* @example const inputString = 'ids:[ string' // KEY:ids TYPE:[ string REQUIRED:true */

export async function urlRedirectBulkDeleteByIds(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        urlRedirectBulkDeleteByIds(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Asynchronously delete redirects in bulk.
* @example const inputString = 'savedSearchId: string' // KEY:savedSearchId TYPE: string REQUIRED:true */

export async function urlRedirectBulkDeleteBySavedSearch(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        urlRedirectBulkDeleteBySavedSearch(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Asynchronously delete redirects in bulk.
* @example const inputString = 'search: string' // KEY:search TYPE: string REQUIRED:true */

export async function urlRedirectBulkDeleteBySearch(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        urlRedirectBulkDeleteBySearch(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a UrlRedirect object.
* @example const inputString = 'urlRedirect: any' // KEY:urlRedirect TYPE: any REQUIRED:true */

export async function urlRedirectCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        urlRedirectCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Deletes a UrlRedirect object.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function urlRedirectDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        urlRedirectDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a UrlRedirectImport object.
* @example const inputString = 'url: any' // KEY:url TYPE: any REQUIRED:true */

export async function urlRedirectImportCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        urlRedirectImportCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Submits a UrlRedirectImport request to be processed.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function urlRedirectImportSubmit(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        urlRedirectImportSubmit(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates a URL redirect.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'urlRedirect: any' // KEY:urlRedirect TYPE: any REQUIRED:true */

export async function urlRedirectUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        urlRedirectUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a new web pixel settings.
* @example const inputString = 'webPixel: any' // KEY:webPixel TYPE: any REQUIRED:true */

export async function webPixelCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        webPixelCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Deletes the web pixel shop settings.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function webPixelDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        webPixelDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates the web pixel settings.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'webPixel: any' // KEY:webPixel TYPE: any REQUIRED:true */

export async function webPixelUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        webPixelUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Creates a new webhook subscription.
* @example const inputString = 'topic: any' // KEY:topic TYPE: any REQUIRED:true
* @example const inputString = 'webhookSubscription: any' // KEY:webhookSubscription TYPE: any REQUIRED:true */

export async function webhookSubscriptionCreate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        webhookSubscriptionCreate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Deletes a webhook subscription.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function webhookSubscriptionDelete(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        webhookSubscriptionDelete(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Updates a webhook subscription.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'webhookSubscription: any' // KEY:webhookSubscription TYPE: any REQUIRED:true */

export async function webhookSubscriptionUpdate(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`mutation{
        webhookSubscriptionUpdate(${input})${dataToReturn}
    }`
    return POST(query,variables)
}