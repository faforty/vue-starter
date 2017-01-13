export const getValidateThisStep = state => state.errorStep ? false : true
export const getCompany = state => state.productFilling.company
export const getProduct = state => state.productFilling.product
export const getPurchase = state => state.productFilling.purchase
export const getNeed = state => state.productFilling.need
export const getPlace = state => state.productFilling.place
export const getCost = state => state.productFilling.cost
export const getPayment = state => state.productFilling.payment
export const getGarant = state => state.productFilling.garant
export const getDisbursement = state => state.productFilling.disbursement


export const getProductFilling = state => state.productFilling
export const getProductOptions = state => state.productOptions
export const getTabs = state => state.tabs
export const getHints = state => state.hints
export const getStep = state => state.isStep 
