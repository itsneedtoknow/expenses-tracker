import { ExpensesInfoDay } from "./ExpensesInfoDay";
import { ExpensesInfoFilter } from "./ExpensesInfoFilter";
import { ExpensesInfoMonth } from "./ExpensesInfoMonth";

export function ExpensesInfo({ expenses }) {
  return (
    <>
      <ExpensesInfoFilter />
      <ExpensesInfoMonth expenses={expenses}>
        <ExpensesInfoDay expenses={expenses} />
      </ExpensesInfoMonth>
    </>
  );
}
