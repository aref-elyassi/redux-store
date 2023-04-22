const initialState = {
    loading: false,
    products: [],
    error: ""
}
const initialStateProductDetail={
    loading: false,
    product: [],
    error: ""
}
const productsReducer = (state=initialState, action) => {
    switch(action.type) {
        case "FETCH_PRODUCTS_REQUEST":
            return {
                products:[],
                error:'',
                loading: true
            }
        case "FETCH_PRODUCTS_SUCCESS":
            return {
                loading: false,
                products: action.payload,
                error:''
            }
        case "FETCH_PRODUCTS_FAILURE":
            return {
                products:[],
                loading: false,
                error: action.payload
            }
        default: return state
    }
}
const productDetailsReducer = (state=initialStateProductDetail, action) => {
    switch(action.type) {
        case "FETCH_PRODUCT_REQUEST":
            return {
                product:[],
                error:'',
                loading: true
            }
        case "FETCH_PRODUCT_SUCCESS":
            return {
                loading: false,
                product: action.payload,
                error:''
            }
        case "FETCH_PRODUCT_FAILURE":
            return {
                product:[],
                loading: false,
                error: action.payload
            }
        default: return state
    }
}

export  {productsReducer,productDetailsReducer};