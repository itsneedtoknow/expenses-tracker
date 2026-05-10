import { ExpensesInfoDay } from "./ExpensesInfoDay";

export function ExpensesInfoMonth({ expenses, onDeleteBtn }) {
  return (
    <>
      <h4>Апрель</h4>
      <ExpensesInfoDay expenses={expenses} onDeleteBtn={onDeleteBtn} />
    </>
  );
}
