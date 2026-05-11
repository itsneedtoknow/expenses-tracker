import { ExpensesInfoItem } from "./ExpensesInfoItem";
import styles from "./ExpensesInfoDay.module.css";

export function ExpensesInfoDay({ expenses, onDeleteBtn, today }) {
  // if (expenses.length) {
  return (
    <>
      {/* {console.log(expenses)} */}
      <h5>{today}</h5>
      <div className={styles.expenses__list}>
        {expenses.map((expense, index) => {
          {
            if (expense.name !== "" && expense.amount !== "") {
              return (
                <ExpensesInfoItem
                  key={index}
                  expense={expense}
                  onDeleteBtn={onDeleteBtn}
                />
              );
            }
          }
        })}
      </div>
      {/*  */}
    </>
  );
}
// }
