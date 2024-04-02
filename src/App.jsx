import { useSelector } from "react-redux";
import "./App.css";
import AccountOperations from "./Features/Account/AccountOperations";
import BalanceDisplay from "./Features/Account/BalanceDisplay";
import Customer from "./Features/Customer/CreateCustomer";
import CustomerNew from "./Features/Customer/CustomerNew";

function App() {
  const name = useSelector((store) => store.customer.name);
  
  return (
    <>
      <h1>Welcome to VM Bank</h1>
      {name == "" ? (
        <Customer />
      ) : (
        <>
          <CustomerNew />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </>
  );
}

export default App;
