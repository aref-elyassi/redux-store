

export const fetchProductsRequest = () => {
    return {
        type: "FETCH_PRODUCTS_REQUEST"
    }
}

export const fetchProductsSuccess = products => {
    return {
        type: "FETCH_PRODUCTS_SUCCESS",
        payload: products
    }
}

export const fetchProductsFailure = error => {
    return {
        type: "FETCH_PRODUCTS_FAILURE",
        payload: error
    }
}


export const fetchProductRequest = () => {
    return {
        type: "FETCH_PRODUCT_REQUEST"
    }
}

export const fetchProductSuccess = (product) => {
    return {
        type: "FETCH_PRODUCT_SUCCESS",
        payload: product
    }
}

export const fetchProductFailure = error => {
    return {
        type: "FETCH_PRODUCT_FAILURE",
        payload: error
    }
}

