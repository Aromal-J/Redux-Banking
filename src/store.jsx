import { combineReducers, createStore } from "redux";
import { accountReducer } from "./Features/Account/AccountSlices";
import CustomerReducer from "./Features/Customer/CustomerSlices";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: CustomerReducer,
});
const store = createStore(rootReducer);
console.log(store.getState());
export default store;
