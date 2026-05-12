import { ExpensesInfoDay } from "./ExpensesInfoDay";
import { ExpensesInfoMonth } from "./ExpensesInfoMonth";

export function ExpensesInfo({ groupedExpenses, onDeleteBtn }) {
  return (
    <>
      {Object.entries(groupedExpenses).map(([month, days]) => {
        return (
          <ExpensesInfoMonth month={month} days={days}>
            <ExpensesInfoDay days={days} onDeleteBtn={onDeleteBtn} />
          </ExpensesInfoMonth>
        );
      })}
    </>
  );
}
