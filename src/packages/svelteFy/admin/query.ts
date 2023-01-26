// @ts-check
import { POST,gql } from "../utilities/admin.js"
import type { ToBeReturnData } from "../types"

/** Returns an abandonment by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function abandonment(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        abandonment(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns an Abandonment by the Abandoned Checkout ID.
* @example const inputString = 'abandonedCheckoutId: string' // KEY:abandonedCheckoutId TYPE: string REQUIRED:true */

export async function abandonmentByAbandonedCheckoutId(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        abandonmentByAbandonedCheckoutId(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Lookup an App by ID or return the currently authenticated App.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:false */

export async function app(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        app(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Fetches app by handle.
Returns null if the app doesn't exist.
* @example const inputString = 'handle: string' // KEY:handle TYPE: string REQUIRED:true */

export async function appByHandle(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        appByHandle(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Fetches an app by its client ID.
Returns null if the app doesn't exist.
* @example const inputString = 'apiKey: string' // KEY:apiKey TYPE: string REQUIRED:true */

export async function appByKey(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        appByKey(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** An app discount type.
* @example const inputString = 'functionId: string' // KEY:functionId TYPE: string REQUIRED:true */

export async function appDiscountType(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        appDiscountType(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** A list of app discount types installed by apps. */

export async function appDiscountTypes(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        appDiscountTypes${dataToReturn}
    }`
    return POST(query,variables)
}

/** Lookup an AppInstallation by ID or return the AppInstallation for the currently authenticated App.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:false */

export async function appInstallation(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        appInstallation(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** List of app installations.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'category: any' // KEY:category TYPE: any REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'privacy: any' // KEY:privacy TYPE: any REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false
* @example const inputString = 'sortKey: any' // KEY:sortKey TYPE: any REQUIRED:false */

export async function appInstallations(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        appInstallations(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns an automatic discount resource by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function automaticDiscountNode(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        automaticDiscountNode(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** List of automatic discounts.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'query: string' // KEY:query TYPE: string REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false
* @example const inputString = 'savedSearchId: string' // KEY:savedSearchId TYPE: string REQUIRED:false
* @example const inputString = 'sortKey: any' // KEY:sortKey TYPE: any REQUIRED:false */

export async function automaticDiscountNodes(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        automaticDiscountNodes(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** List of the shop's automatic discount saved searches.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false */

export async function automaticDiscountSavedSearches(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        automaticDiscountSavedSearches(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a list of activated carrier services and associated shop locations that support them. */

export async function availableCarrierServices(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        availableCarrierServices${dataToReturn}
    }`
    return POST(query,variables)
}

/** A list of available locales. */

export async function availableLocales(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        availableLocales${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a DeliveryCarrierService object by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function carrierService(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        carrierService(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** A checkout profile on a shop.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function checkoutProfile(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        checkoutProfile(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** List of checkout profiles on a shop.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'query: string' // KEY:query TYPE: string REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false
* @example const inputString = 'sortKey: any' // KEY:sortKey TYPE: any REQUIRED:false */

export async function checkoutProfiles(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        checkoutProfiles(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a code discount resource by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function codeDiscountNode(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        codeDiscountNode(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a code discount identified by its discount code.
* @example const inputString = 'code: string' // KEY:code TYPE: string REQUIRED:true */

export async function codeDiscountNodeByCode(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        codeDiscountNodeByCode(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** List of code discounts. Special fields for query params:
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'query: string' // KEY:query TYPE: string REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false
* @example const inputString = 'savedSearchId: string' // KEY:savedSearchId TYPE: string REQUIRED:false
* @example const inputString = 'sortKey: any' // KEY:sortKey TYPE: any REQUIRED:false */

export async function codeDiscountNodes(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        codeDiscountNodes(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** List of the shop's code discount saved searches.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false */

export async function codeDiscountSavedSearches(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        codeDiscountSavedSearches(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a Collection resource by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function collection(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        collection(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Return a collection by its handle.
* @example const inputString = 'handle: string' // KEY:handle TYPE: string REQUIRED:true */

export async function collectionByHandle(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        collectionByHandle(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Lists all rules that can be used to create smart collections. */

export async function collectionRulesConditions(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        collectionRulesConditions${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a list of the shop's collection saved searches.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false */

export async function collectionSavedSearches(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        collectionSavedSearches(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a list of collections.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'query: string' // KEY:query TYPE: string REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false
* @example const inputString = 'savedSearchId: string' // KEY:savedSearchId TYPE: string REQUIRED:false
* @example const inputString = 'sortKey: any' // KEY:sortKey TYPE: any REQUIRED:false */

export async function collections(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        collections(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns the list of companies in the shop.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'query: string' // KEY:query TYPE: string REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false
* @example const inputString = 'sortKey: any' // KEY:sortKey TYPE: any REQUIRED:false */

export async function companies(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        companies(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a Company object by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function company(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        company(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a CompanyContact object by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function companyContact(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        companyContact(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a CompanyContactRole object by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function companyContactRole(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        companyContactRole(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** The number of companies for a shop. */

export async function companyCount(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        companyCount${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a CompanyLocation object by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function companyLocation(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        companyLocation(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns the list of company locations in the shop.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'query: string' // KEY:query TYPE: string REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false
* @example const inputString = 'sortKey: any' // KEY:sortKey TYPE: any REQUIRED:false */

export async function companyLocations(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        companyLocations(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Return the AppInstallation for the currently authenticated App. */

export async function currentAppInstallation(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        currentAppInstallation${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns the current app's most recent BulkOperation. Apps can run one bulk query and one bulk mutation operation at a time, by shop.
* @example const inputString = 'type: any' // KEY:type TYPE: any REQUIRED:false */

export async function currentBulkOperation(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        currentBulkOperation(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a Customer resource by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function customer(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        customer(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a CustomerPaymentMethod resource by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true
* @example const inputString = 'showRevoked: boolean' // KEY:showRevoked TYPE: boolean REQUIRED:false */

export async function customerPaymentMethod(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        customerPaymentMethod(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** The list of members, such as customers, that's associated with an individual segment.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'query: string' // KEY:query TYPE: string REQUIRED:false
* @example const inputString = 'queryId: string' // KEY:queryId TYPE: string REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false
* @example const inputString = 'segmentId: string' // KEY:segmentId TYPE: string REQUIRED:false
* @example const inputString = 'sortKey: string' // KEY:sortKey TYPE: string REQUIRED:false
* @example const inputString = 'timezone: string' // KEY:timezone TYPE: string REQUIRED:false */

export async function customerSegmentMembers(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        customerSegmentMembers(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a segment members query resource by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function customerSegmentMembersQuery(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        customerSegmentMembersQuery(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Whether a member, which is a customer, belongs to a segment.
* @example const inputString = 'customerId: string' // KEY:customerId TYPE: string REQUIRED:true
* @example const inputString = 'segmentIds:[ string' // KEY:segmentIds TYPE:[ string REQUIRED:true */

export async function customerSegmentMembership(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        customerSegmentMembership(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** List of customers.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'query: string' // KEY:query TYPE: string REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false
* @example const inputString = 'sortKey: any' // KEY:sortKey TYPE: any REQUIRED:false */

export async function customers(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        customers(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** The paginated list of deletion events.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'query: string' // KEY:query TYPE: string REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false
* @example const inputString = 'sortKey: any' // KEY:sortKey TYPE: any REQUIRED:false
* @example const inputString = 'subjectTypes:[ any' // KEY:subjectTypes TYPE:[ any REQUIRED:true */

export async function deletionEvents(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        deletionEvents(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a Delivery Profile resource by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function deliveryProfile(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        deliveryProfile(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a list of saved delivery profiles.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'merchantOwnedOnly: boolean' // KEY:merchantOwnedOnly TYPE: boolean REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false */

export async function deliveryProfiles(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        deliveryProfiles(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns the shop-wide shipping settings. */

export async function deliverySettings(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        deliverySettings${dataToReturn}
    }`
    return POST(query,variables)
}

/** The total number of discount codes for the shop.
* @example const inputString = 'query: string' // KEY:query TYPE: string REQUIRED:false */

export async function discountCodeCount(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        discountCodeCount(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a discount resource by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function discountNode(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        discountNode(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** List of discounts.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'query: string' // KEY:query TYPE: string REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false
* @example const inputString = 'savedSearchId: string' // KEY:savedSearchId TYPE: string REQUIRED:false
* @example const inputString = 'sortKey: any' // KEY:sortKey TYPE: any REQUIRED:false */

export async function discountNodes(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        discountNodes(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a bulk code creation resource by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function discountRedeemCodeBulkCreation(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        discountRedeemCodeBulkCreation(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** List of the shop's redeemed discount code saved searches.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'query: string' // KEY:query TYPE: string REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false
* @example const inputString = 'sortKey: any' // KEY:sortKey TYPE: any REQUIRED:false */

export async function discountRedeemCodeSavedSearches(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        discountRedeemCodeSavedSearches(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns dispute details based on ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function dispute(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        dispute(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns dispute evidence details based on ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function disputeEvidence(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        disputeEvidence(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Lookup a Domain by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function domain(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        domain(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a DraftOrder resource by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function draftOrder(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        draftOrder(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** List of the shop's draft order saved searches.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false */

export async function draftOrderSavedSearches(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        draftOrderSavedSearches(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a DraftOrderTag resource by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function draftOrderTag(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        draftOrderTag(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** List of saved draft orders.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'query: string' // KEY:query TYPE: string REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false
* @example const inputString = 'savedSearchId: string' // KEY:savedSearchId TYPE: string REQUIRED:false
* @example const inputString = 'sortKey: any' // KEY:sortKey TYPE: any REQUIRED:false */

export async function draftOrders(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        draftOrders(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** A list of the shop's file saved searches.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false */

export async function fileSavedSearches(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        fileSavedSearches(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a paginated list of files that have been uploaded to Shopify.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'query: string' // KEY:query TYPE: string REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false
* @example const inputString = 'savedSearchId: string' // KEY:savedSearchId TYPE: string REQUIRED:false
* @example const inputString = 'sortKey: any' // KEY:sortKey TYPE: any REQUIRED:false */

export async function files(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        files(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a Fulfillment resource by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function fulfillment(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        fulfillment(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a Fulfillment order resource by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function fulfillmentOrder(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        fulfillmentOrder(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** The paginated list of merchant-managed and third-party fulfillment orders.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'includeClosed: boolean' // KEY:includeClosed TYPE: boolean REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'query: string' // KEY:query TYPE: string REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false
* @example const inputString = 'sortKey: any' // KEY:sortKey TYPE: any REQUIRED:false */

export async function fulfillmentOrders(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        fulfillmentOrders(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a FulfillmentService resource by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function fulfillmentService(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        fulfillmentService(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a gift card resource by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function giftCard(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        giftCard(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a list of gift cards.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'query: string' // KEY:query TYPE: string REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false
* @example const inputString = 'savedSearchId: string' // KEY:savedSearchId TYPE: string REQUIRED:false
* @example const inputString = 'sortKey: any' // KEY:sortKey TYPE: any REQUIRED:false */

export async function giftCards(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        giftCards(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** The total number of gift cards issued for the shop.
* @example const inputString = 'enabled: boolean' // KEY:enabled TYPE: boolean REQUIRED:false */

export async function giftCardsCount(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        giftCardsCount(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns an InventoryItem object by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function inventoryItem(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        inventoryItem(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a list of inventory items.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'query: string' // KEY:query TYPE: string REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false */

export async function inventoryItems(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        inventoryItems(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns an InventoryLevel object by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function inventoryLevel(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        inventoryLevel(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** General inventory properties for the shop. */

export async function inventoryProperties(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        inventoryProperties${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a Job resource by ID. Used to check the status of internal jobs and any applicable changes.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function job(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        job(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns an inventory Location resource by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:false */

export async function location(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        location(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a list of active inventory locations.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'includeInactive: boolean' // KEY:includeInactive TYPE: boolean REQUIRED:false
* @example const inputString = 'includeLegacy: boolean' // KEY:includeLegacy TYPE: boolean REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'query: string' // KEY:query TYPE: string REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false
* @example const inputString = 'sortKey: any' // KEY:sortKey TYPE: any REQUIRED:false */

export async function locations(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        locations(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a list of all origin locations available for a delivery profile.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false */

export async function locationsAvailableForDeliveryProfilesConnection(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        locationsAvailableForDeliveryProfilesConnection(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a list of fulfillment orders that are on hold.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'query: string' // KEY:query TYPE: string REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false */

export async function manualHoldsFulfillmentOrders(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        manualHoldsFulfillmentOrders(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a market resource by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function market(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        market(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns the applicable market for a customer based on where they are in the world.
* @example const inputString = 'countryCode: any' // KEY:countryCode TYPE: any REQUIRED:true */

export async function marketByGeography(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        marketByGeography(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** A resource that can have localized values for different markets.
* @example const inputString = 'resourceId: string' // KEY:resourceId TYPE: string REQUIRED:true */

export async function marketLocalizableResource(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        marketLocalizableResource(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Resources that can have localized values for different markets.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'resourceType: any' // KEY:resourceType TYPE: any REQUIRED:true
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false */

export async function marketLocalizableResources(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        marketLocalizableResources(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Resources that can have localized values for different markets.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'resourceIds:[ string' // KEY:resourceIds TYPE:[ string REQUIRED:true
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false */

export async function marketLocalizableResourcesByIds(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        marketLocalizableResourcesByIds(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** A list of marketing activities associated with the marketing app.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'marketingActivityIds:[ string' // KEY:marketingActivityIds TYPE:[ string REQUIRED:true
* @example const inputString = 'query: string' // KEY:query TYPE: string REQUIRED:false
* @example const inputString = 'remoteIds:[ string' // KEY:remoteIds TYPE:[ string REQUIRED:true
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false
* @example const inputString = 'savedSearchId: string' // KEY:savedSearchId TYPE: string REQUIRED:false
* @example const inputString = 'sortKey: any' // KEY:sortKey TYPE: any REQUIRED:false
* @example const inputString = 'utm: any' // KEY:utm TYPE: any REQUIRED:false */

export async function marketingActivities(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        marketingActivities(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a MarketingActivity resource by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function marketingActivity(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        marketingActivity(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a MarketingEvent resource by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function marketingEvent(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        marketingEvent(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** A list of marketing events associated with the marketing app.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'query: string' // KEY:query TYPE: string REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false
* @example const inputString = 'sortKey: any' // KEY:sortKey TYPE: any REQUIRED:false */

export async function marketingEvents(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        marketingEvents(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** The markets configured for the shop.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false */

export async function markets(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        markets(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a metafield by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function metafield(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        metafield(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a metafield definition by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function metafieldDefinition(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        metafieldDefinition(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Each metafield definition has a type, which defines the type of information that it can store.
This type is enforced across every instance of the resource that owns the metafield definition. */

export async function metafieldDefinitionTypes(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        metafieldDefinitionTypes${dataToReturn}
    }`
    return POST(query,variables)
}

/** List of metafield definitions.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'key: string' // KEY:key TYPE: string REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'namespace: string' // KEY:namespace TYPE: string REQUIRED:false
* @example const inputString = 'ownerType: any' // KEY:ownerType TYPE: any REQUIRED:true
* @example const inputString = 'pinnedStatus: any' // KEY:pinnedStatus TYPE: any REQUIRED:false
* @example const inputString = 'query: string' // KEY:query TYPE: string REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false
* @example const inputString = 'sortKey: any' // KEY:sortKey TYPE: any REQUIRED:false */

export async function metafieldDefinitions(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        metafieldDefinitions(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** List of the MetafieldStorefrontVisibility records.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'namespace: string' // KEY:namespace TYPE: string REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false */

export async function metafieldStorefrontVisibilities(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        metafieldStorefrontVisibilities(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a MetafieldStorefrontVisibility record by ID. A MetafieldStorefrontVisibility record lists the
metafields to make visible in the Storefront API.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function metafieldStorefrontVisibility(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        metafieldStorefrontVisibility(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Retrieves a metaobject by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function metaobject(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        metaobject(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Retrieves a metaobject by handle.
* @example const inputString = 'handle: any' // KEY:handle TYPE: any REQUIRED:true */

export async function metaobjectByHandle(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        metaobjectByHandle(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Retrieves a metaobject definition by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function metaobjectDefinition(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        metaobjectDefinition(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Finds a metaobject definition by type.
* @example const inputString = 'type: string' // KEY:type TYPE: string REQUIRED:true */

export async function metaobjectDefinitionByType(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        metaobjectDefinitionByType(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** All metaobject definitions.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false */

export async function metaobjectDefinitions(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        metaobjectDefinitions(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** All metaobjects for the shop.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'query: string' // KEY:query TYPE: string REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false
* @example const inputString = 'sortKey: string' // KEY:sortKey TYPE: string REQUIRED:false
* @example const inputString = 'type: string' // KEY:type TYPE: string REQUIRED:true */

export async function metaobjects(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        metaobjects(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a specific node (any object that implements the
Node
interface) by ID, in accordance with the
Relay specification.
This field is commonly used for refetching an object.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function node(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        node(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns the list of nodes (any objects that implement the
Node
interface) with the given IDs, in accordance with the
Relay specification.
* @example const inputString = 'ids:[ string' // KEY:ids TYPE:[ string REQUIRED:true */

export async function nodes(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        nodes(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns an Order resource by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function order(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        order(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a payment status by payment reference ID. Used to check the status of a deferred payment.
* @example const inputString = 'orderId: string' // KEY:orderId TYPE: string REQUIRED:true
* @example const inputString = 'paymentReferenceId: string' // KEY:paymentReferenceId TYPE: string REQUIRED:true */

export async function orderPaymentStatus(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        orderPaymentStatus(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** List of the shop's order saved searches.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false */

export async function orderSavedSearches(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        orderSavedSearches(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a list of orders placed.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'query: string' // KEY:query TYPE: string REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false
* @example const inputString = 'savedSearchId: string' // KEY:savedSearchId TYPE: string REQUIRED:false
* @example const inputString = 'sortKey: any' // KEY:sortKey TYPE: any REQUIRED:false */

export async function orders(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        orders(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** The list of payment terms templates eligible for all shops and users.
* @example const inputString = 'paymentTermsType: any' // KEY:paymentTermsType TYPE: any REQUIRED:false */

export async function paymentTermsTemplates(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        paymentTermsTemplates(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a price list resource by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function priceList(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        priceList(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** All price lists for a shop.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'matchRule: any' // KEY:matchRule TYPE: any REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false
* @example const inputString = 'sortKey: any' // KEY:sortKey TYPE: any REQUIRED:false */

export async function priceLists(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        priceLists(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a price rule resource by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function priceRule(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        priceRule(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** List of the shop's price rule saved searches.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false */

export async function priceRuleSavedSearches(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        priceRuleSavedSearches(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a list of price rule resources.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'query: string' // KEY:query TYPE: string REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false
* @example const inputString = 'savedSearchId: string' // KEY:savedSearchId TYPE: string REQUIRED:false
* @example const inputString = 'sortKey: any' // KEY:sortKey TYPE: any REQUIRED:false */

export async function priceRules(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        priceRules(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** The primary market of the shop. */

export async function primaryMarket(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        primaryMarket${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a private metafield by ID.
Private metafields are accessible only by the application that created them.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function privateMetafield(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        privateMetafield(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a list of private metafields associated to a resource.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'namespace: string' // KEY:namespace TYPE: string REQUIRED:false
* @example const inputString = 'owner: string' // KEY:owner TYPE: string REQUIRED:true
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false */

export async function privateMetafields(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        privateMetafields(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a Product resource by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function product(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        product(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Return a product by its handle.
* @example const inputString = 'handle: string' // KEY:handle TYPE: string REQUIRED:true */

export async function productByHandle(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        productByHandle(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns the product resource feedback for the currently authenticated app.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function productResourceFeedback(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        productResourceFeedback(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a list of the shop's product saved searches.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false */

export async function productSavedSearches(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        productSavedSearches(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a ProductVariant resource by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function productVariant(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        productVariant(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** List of the product variants.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'query: string' // KEY:query TYPE: string REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false
* @example const inputString = 'savedSearchId: string' // KEY:savedSearchId TYPE: string REQUIRED:false
* @example const inputString = 'sortKey: any' // KEY:sortKey TYPE: any REQUIRED:false */

export async function productVariants(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        productVariants(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** List of products.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'query: string' // KEY:query TYPE: string REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false
* @example const inputString = 'savedSearchId: string' // KEY:savedSearchId TYPE: string REQUIRED:false
* @example const inputString = 'sortKey: any' // KEY:sortKey TYPE: any REQUIRED:false */

export async function products(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        products(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** The list of publicly-accessible Admin API versions, including supported versions, the release candidate, and unstable versions. */

export async function publicApiVersions(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        publicApiVersions${dataToReturn}
    }`
    return POST(query,variables)
}

/** Lookup a publication by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function publication(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        publication(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** List of publications.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false */

export async function publications(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        publications(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a Refund resource by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function refund(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        refund(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a Return resource by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function Return(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        Return(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Lookup a returnable fulfillment by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function returnableFulfillment(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        ReturnableFulfillment(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** List of returnable fulfillments.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'orderId: string' // KEY:orderId TYPE: string REQUIRED:true
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false */

export async function returnableFulfillments(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        ReturnableFulfillments(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Lookup a reverse delivery by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function reverseDelivery(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        reverseDelivery(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Lookup a reverse fulfillment order by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function reverseFulfillmentOrder(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        reverseFulfillmentOrder(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Theme app extensions
Your app might not pass App Store review if it uses script tags instead of theme app extensions. All new apps, and apps that integrate with Online Store 2.0 themes, should use theme app extensions, such as app blocks or app embed blocks. Script tags are an alternative you can use with only vintage themes. Learn more.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function scriptTag(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        scriptTag(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Theme app extensions
Your app might not pass App Store review if it uses script tags instead of theme app extensions. All new apps, and apps that integrate with Online Store 2.0 themes, should use theme app extensions, such as app blocks or app embed blocks. Script tags are an alternative you can use with only vintage themes. Learn more.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false
* @example const inputString = 'src: any' // KEY:src TYPE: any REQUIRED:false */

export async function scriptTags(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        scriptTags(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** The Customer Segment.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function segment(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        segment(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** The number of segments for a shop. */

export async function segmentCount(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        segmentCount${dataToReturn}
    }`
    return POST(query,variables)
}

/** A list of filter suggestions associated with a segment. A segment is a group of members (commonly customers) that meet specific criteria.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:true
* @example const inputString = 'search: string' // KEY:search TYPE: string REQUIRED:true */

export async function segmentFilterSuggestions(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        segmentFilterSuggestions(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** A list of filters.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false */

export async function segmentFilters(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        segmentFilters(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** A list of a shop's segment migrations.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'savedSearchId: string' // KEY:savedSearchId TYPE: string REQUIRED:false */

export async function segmentMigrations(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        segmentMigrations(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** The list of suggested values that's associated with an individual segment.A segment is a group of members, such as customers, that meet specific criteria.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'filterQueryName: string' // KEY:filterQueryName TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'search: string' // KEY:search TYPE: string REQUIRED:true */

export async function segmentValueSuggestions(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        segmentValueSuggestions(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** A list of a shop's segments.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'query: string' // KEY:query TYPE: string REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false
* @example const inputString = 'sortKey: any' // KEY:sortKey TYPE: any REQUIRED:false */

export async function segments(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        segments(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a Selling Plan Group resource by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function sellingPlanGroup(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        sellingPlanGroup(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** List Selling Plan Groups.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'query: string' // KEY:query TYPE: string REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false
* @example const inputString = 'sortKey: any' // KEY:sortKey TYPE: any REQUIRED:false */

export async function sellingPlanGroups(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        sellingPlanGroups(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns the Shop resource corresponding to the access token used in the request. The Shop resource contains
business and store management settings for the shop. */

export async function shop(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        shop${dataToReturn}
    }`
    return POST(query,variables)
}

/** A list of locales available on a shop.
* @example const inputString = 'published: boolean' // KEY:published TYPE: boolean REQUIRED:false */

export async function shopLocales(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        shopLocales(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Shopify Payments account information, including balances and payouts. */

export async function shopifyPaymentsAccount(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        shopifyPaymentsAccount${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns the results of a ShopifyQL query. Refer to the ShopifyQL documentation for more information.
* @example const inputString = 'query: string' // KEY:query TYPE: string REQUIRED:true */

export async function shopifyqlQuery(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        shopifyqlQuery(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** The StaffMember resource, by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:false */

export async function staffMember(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        staffMember(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Standard metafield definitions are intended for specific, common use cases. Their namespace and keys reflect these use cases and are reserved.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false */

export async function standardMetafieldDefinitionTemplates(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        standardMetafieldDefinitionTemplates(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a SubscriptionBillingAttempt by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function subscriptionBillingAttempt(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        subscriptionBillingAttempt(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a subscription billing cycle found either by cycle index or date.
* @example const inputString = 'billingCycleInput: any' // KEY:billingCycleInput TYPE: any REQUIRED:true */

export async function subscriptionBillingCycle(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        subscriptionBillingCycle(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns subscription billing cycles for a contract ID.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'billingCyclesDateRangeSelector: any' // KEY:billingCyclesDateRangeSelector TYPE: any REQUIRED:false
* @example const inputString = 'billingCyclesIndexRangeSelector: any' // KEY:billingCyclesIndexRangeSelector TYPE: any REQUIRED:false
* @example const inputString = 'contractId: string' // KEY:contractId TYPE: string REQUIRED:true
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false
* @example const inputString = 'sortKey: any' // KEY:sortKey TYPE: any REQUIRED:false */

export async function subscriptionBillingCycles(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        subscriptionBillingCycles(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a Subscription Contract resource by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function subscriptionContract(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        subscriptionContract(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** List Subscription Contracts.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false */

export async function subscriptionContracts(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        subscriptionContracts(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a Subscription Draft resource by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function subscriptionDraft(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        subscriptionDraft(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a list of TenderTransactions associated with the shop.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'query: string' // KEY:query TYPE: string REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false */

export async function tenderTransactions(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        tenderTransactions(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** A resource that can have localized values for different languages.
* @example const inputString = 'resourceId: string' // KEY:resourceId TYPE: string REQUIRED:true */

export async function translatableResource(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        translatableResource(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Resources that can have localized values for different languages.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'resourceType: any' // KEY:resourceType TYPE: any REQUIRED:true
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false */

export async function translatableResources(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        translatableResources(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Resources that can have localized values for different languages.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'resourceIds:[ string' // KEY:resourceIds TYPE:[ string REQUIRED:true
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false */

export async function translatableResourcesByIds(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        translatableResourcesByIds(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a redirect resource by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function urlRedirect(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        urlRedirect(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a redirect import resource by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function urlRedirectImport(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        urlRedirectImport(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** A list of the shop's URL redirect saved searches.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false */

export async function urlRedirectSavedSearches(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        urlRedirectSavedSearches(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** A list of redirects for a shop.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'query: string' // KEY:query TYPE: string REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false
* @example const inputString = 'savedSearchId: string' // KEY:savedSearchId TYPE: string REQUIRED:false
* @example const inputString = 'sortKey: any' // KEY:sortKey TYPE: any REQUIRED:false */

export async function urlRedirects(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        urlRedirects(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** The web pixel configured by the app.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function webPixel(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        webPixel(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a webhook subscription by ID.
* @example const inputString = 'id: string' // KEY:id TYPE: string REQUIRED:true */

export async function webhookSubscription(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        webhookSubscription(${input})${dataToReturn}
    }`
    return POST(query,variables)
}

/** Returns a list of webhook subscriptions.
* @example const inputString = 'after: string' // KEY:after TYPE: string REQUIRED:false
* @example const inputString = 'before: string' // KEY:before TYPE: string REQUIRED:false
* @example const inputString = 'callbackUrl: any' // KEY:callbackUrl TYPE: any REQUIRED:false
* @example const inputString = 'first: number' // KEY:first TYPE: number REQUIRED:false
* @example const inputString = 'format: any' // KEY:format TYPE: any REQUIRED:false
* @example const inputString = 'last: number' // KEY:last TYPE: number REQUIRED:false
* @example const inputString = 'query: string' // KEY:query TYPE: string REQUIRED:false
* @example const inputString = 'reverse: boolean' // KEY:reverse TYPE: boolean REQUIRED:false
* @example const inputString = 'sortKey: any' // KEY:sortKey TYPE: any REQUIRED:false
* @example const inputString = 'topics:[ any' // KEY:topics TYPE:[ any REQUIRED:true */

export async function webhookSubscriptions(input:string,variables:object,dataToReturn:ToBeReturnData){
    const query = gql`query{
        webhookSubscriptions(${input})${dataToReturn}
    }`
    return POST(query,variables)
}