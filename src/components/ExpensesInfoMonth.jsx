import { ExpensesInfoDay } from "./ExpensesInfoDay";

export function ExpensesInfoMonth({
  expenses,
  onDeleteBtn,
  today,
  currentMonth,
}) {
  if (expenses.length) {
    return (
      <>
        <h4>{currentMonth}</h4>
        <ExpensesInfoDay
          expenses={expenses}
          onDeleteBtn={onDeleteBtn}
          today={today}
        />
      </>
    );
  }
}
