const customerState = {
  name: "",
  nationalID: "",
  createdAt: "",
};

// customer reducer creation
export default function CustomerReducer(state = customerState, action) {
  switch (action.type) {
    case "customer/add":
      return {
        ...state,
        name: action.payload.name,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/addName":
      return { ...state, name: action.customer.name };
    default:
      return state;
  }
}

//action creators for customer
export function addCustomer(name, nationalID) {
  return { type: "customer/add", payload: { name, nationalID } };
}

export function addName(name) {
  return { type: "customer/addName", payload: name };
}
