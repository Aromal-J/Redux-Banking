import { applyMiddleware, combineReducers, createStore } from "redux";
import { accountReducer } from "./Features/Account/AccountSlices";
import CustomerReducer from "./Features/Customer/CustomerSlices";
import {thunk} from 'redux-thunk'
import {composeWithDevTools} from "@redux-devtools/extension"

const rootReducer = combineReducers({
  account: accountReducer,
  customer: CustomerReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)) );
console.log(store.getState());

export default store;
