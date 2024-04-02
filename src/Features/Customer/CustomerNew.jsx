import React from "react";
import { useSelector } from "react-redux";

function CustomerNew() {
  const customer=useSelector((store)=>store.customer.name)
  console.log(customer);
  return <h2>👋 Welcome, {customer}</h2>;
}

export default CustomerNew;
