import { useEffect, useState } from "react";

import "./App.css";
import { ExpensesDashBoard } from "./components/ExpensesDashboad";
import { ExpensesForm } from "./components/ExpensesForm";
import { ExpensesInfo } from "./components/ExpensesInfo";
import { Months, MonthsGenitive } from "./data/calendar";

function App() {
  //const [FormData, setFormData] = useState([]);
  const [FormData, setFormData] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });
  //const [day, setDay] = useState();

  const date = new Date();
  const monthIndex = date.getMonth() + 1;
  const day = date.getDate();
  const today = `${day} ${MonthsGenitive[monthIndex]}`;
  const currentMonth = Months[monthIndex];

  useEffect(() => {
    if (FormData.length > 0) {
      localStorage.setItem("expenses", JSON.stringify(FormData));
    }
  }, [FormData]);
  function submitExpenseHandler(newFormData) {
    const updatedFormData = [...FormData, newFormData];
    setFormData(updatedFormData);
  }
  function deleteBtnHandler(id) {
    setFormData(
      FormData.filter((item) => {
        return item.id !== id;
      }),
    );
  }
  const dashboardValue = FormData.reduce(
    (result, item) => result + Number(item.amount),
    0,
  );
  return (
    <>
      <ExpensesDashBoard dashboardValue={dashboardValue} />
      <ExpensesForm onSubmitExpenseItem={submitExpenseHandler} />
      <ExpensesInfo
        expenses={FormData}
        onDeleteBtn={deleteBtnHandler}
        today={today}
        currentMonth={currentMonth}
      />
    </>
  );
}

export default App;
