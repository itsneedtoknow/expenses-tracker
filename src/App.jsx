import { useEffect, useState } from "react";

import "./App.css";
import { ExpensesDashBoard } from "./components/ExpensesDashboad";
import { ExpensesForm } from "./components/ExpensesForm";
import { ExpensesInfo } from "./components/ExpensesInfo";

function App() {
  const [DashboardValue, setDashboardValue] = useState(0);

  const [FormData, setFormData] = useState([]);
  // function submitExpenseHandler(newFormData) {
  //   const updatedFormData = [...FormData, newFormData];
  //   setFormData(updatedFormData);
  // }
  // useEffect(() => {
  //   const total = FormData.reduce(
  //     (result, item) => result + Number(item.amount),
  //     0,
  //   );
  //   setDashboardValue(total);
  // }, [FormData]);
  return (
    <>
      <ExpensesDashBoard dashboardValue={DashboardValue} />
      <ExpensesForm onSubmitExpenseItem={submitExpenseHandler} />
      <ExpensesInfo expenses={FormData} />
    </>
  );
}

export default App;
