import { useEffect, useState } from "react";

import "./App.css";
import { ExpensesDashBoard } from "./components/ExpensesDashboad";
import { ExpensesForm } from "./components/ExpensesForm";
import { ExpensesInfo } from "./components/ExpensesInfo";
import { ExpensesInfoFilter } from "./components/ExpensesInfoFilter";
import { Months, MonthsGenitive } from "./data/calendar";

function App() {
  const [FormData, setFormData] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });
  const [month, setMonth] = useState();
  const [category, setCategory] = useState();
  /*Отфильтрованные расходы*/
  const filteredExpenses = FormData.filter((item) => {
    const monthMatch = month ? month === String(item.month) : true;
    const categoryMatch = category ? category === item.category : true;

    return monthMatch && categoryMatch;
  });

  /*Группировка по месяцу и дню */
  const groupedExpenses = filteredExpenses.reduce((acc, item) => {
    const monthName = Months[item.month];

    const dayName = `${item.date} ${MonthsGenitive[item.month]}`;

    if (!acc[monthName]) acc[monthName] = {};

    if (!acc[monthName][dayName]) acc[monthName][dayName] = [];

    acc[monthName][dayName].push(item);
    return acc;
  }, {});

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
  const dashboardValue = filteredExpenses.reduce(
    (result, item) => result + Number(item.amount),
    0,
  );

  return (
    <>
      <ExpensesDashBoard dashboardValue={dashboardValue} />
      <ExpensesForm onSubmitExpenseItem={submitExpenseHandler} />
      <ExpensesInfoFilter
        selectedMonth={month}
        onMonthChange={(e) => setMonth(e.target.value)}
        selectedCategory={category}
        onCategoryChange={(e) => setCategory(e.target.value)}
      />
      <ExpensesInfo
        groupedExpenses={groupedExpenses}
        expenses={filteredExpenses}
        onDeleteBtn={deleteBtnHandler}
        today={today}
        currentMonth={currentMonth}
      />
    </>
  );
}

export default App;
