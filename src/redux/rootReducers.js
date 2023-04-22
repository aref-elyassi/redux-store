import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import {productsReducer} from "./product/productReducer";
import { productDetailsReducer } from "./product/productReducer";

const rootReducer = combineReducers({
    productsState: productsReducer,
    productDetailsState:productDetailsReducer,
    cartState:cartReducer
})

export default rootReducer;