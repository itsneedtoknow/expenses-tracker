import { ExpensesInfoDay } from "./ExpensesInfoDay";
import { ExpensesInfoFilter } from "./ExpensesInfoFilter";
import { ExpensesInfoMonth } from "./ExpensesInfoMonth";

export function ExpensesInfo({ expenses, onDeleteBtn }) {
  return (
    <>
      <ExpensesInfoFilter />
      <ExpensesInfoMonth expenses={expenses} onDeleteBtn={onDeleteBtn}>
        <ExpensesInfoDay expenses={expenses} onDeleteBtn={onDeleteBtn} />
      </ExpensesInfoMonth>
    </>
  );
}
