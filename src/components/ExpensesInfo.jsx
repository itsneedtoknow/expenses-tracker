import { ExpensesInfoDay } from "./ExpensesInfoDay";
import { ExpensesInfoFilter } from "./ExpensesInfoFilter";
import { ExpensesInfoMonth } from "./ExpensesInfoMonth";

export function ExpensesInfo({ expenses, onDeleteBtn, today, currentMonth }) {
  return (
    <>
      <ExpensesInfoFilter />
      <ExpensesInfoMonth
        expenses={expenses}
        onDeleteBtn={onDeleteBtn}
        today={today}
        currentMonth={currentMonth}
      >
        <ExpensesInfoDay
          expenses={expenses}
          onDeleteBtn={onDeleteBtn}
          today={today}
          currentMonth={currentMonth}
        />
      </ExpensesInfoMonth>
    </>
  );
}
