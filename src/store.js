import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
    productDetailReducer,
    productListReducer
} from "./reducers/productReducers";

const reducer = combineReducers({
  productDetail: productDetailReducer,
  productList: productListReducer,
});

const initialState = {
  productList: productListReducer,
  productDetail: productDetailReducer,
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
