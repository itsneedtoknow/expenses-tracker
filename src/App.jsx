import { useState } from "react";

import "./App.css";
import { ExpensesDashBoard } from "./components/ExpensesDashboad";
import { ExpensesForm } from "./components/ExpensesForm";
import { ExpensesInfo } from "./components/ExpensesInfo";

function App() {
  //const [DashboardValue, setDashboardValue] = useState(0);

  const [FormData, setFormData] = useState([]);
  function submitExpenseHandler(newFormData) {
    const updatedFormData = [...FormData, newFormData];
    setFormData(updatedFormData);
  }
  function deleteBtnHandler(id) {
    setFormData(
      FormData.filter((item) => {
        return item.id !== id;
        //console.log(item.id);
      }),
    );
    //const updatedFormData = [...FormData, newFormData];
  }
  //useEffect(() => {
  const dashboardValue = FormData.reduce(
    (result, item) => result + Number(item.amount),
    0,
  );
  //setDashboardValue(total);
  //}, [FormData]);
  return (
    <>
      <ExpensesDashBoard dashboardValue={dashboardValue} />
      <ExpensesForm onSubmitExpenseItem={submitExpenseHandler} />
      <ExpensesInfo expenses={FormData} onDeleteBtn={deleteBtnHandler} />
    </>
  );
}

export default App;
