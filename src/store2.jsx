import { createStore } from "redux";

const initialState={
        name:"",
        address:""
}

function studentReducer(state=initialState,action){
        switch(action.type){
                case "list/add":
                        return {...state,name:action.payload.name,address:action.payload.address}
                        
                case "list/addName":
                        return {...state,name:action.payload.name}
                }
}

function add(name,address){
        return({type:"list/add",payload:{name,address}})
}

function addName(name){
        return({type:"list/addName",payload:{name}})
}
const store=createStore(studentReducer);
store.dispatch(add("akshay","valungal"))
store.dispatch(addName("akhil"))
console.log(store.getState());
console.log(new Date().toISOString());

console.log(addName().payload);