import { ExpensesInfoDay } from "./ExpensesInfoDay";

export function ExpensesInfoMonth({ expenses }) {
  return (
    <>
      <h4>Апрель</h4>
      <ExpensesInfoDay expenses={expenses} />
    </>
  );
}
