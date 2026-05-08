import { ExpensesInfoItem } from "./ExpensesInfoItem";

export function ExpensesInfoDay({ expenses }) {
  return (
    <>
      {console.log(expenses)}
      <h5>12 Апреля</h5>
      {expenses.map((expense, index) => {
        return <ExpensesInfoItem key={index} expense={expense} />;
      })}
      {/*  */}
    </>
  );
}
