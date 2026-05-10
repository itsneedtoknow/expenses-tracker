import { ExpensesInfoItem } from "./ExpensesInfoItem";
import styles from "./ExpensesInfoDay.module.css";

export function ExpensesInfoDay({ expenses, onDeleteBtn }) {
  return (
    <>
      {/* {console.log(expenses)} */}
      <h5>12 Апреля</h5>
      <div className={styles.expenses__list}>
        {expenses.map((expense, index) => {
          return (
            <ExpensesInfoItem
              key={index}
              expense={expense}
              onDeleteBtn={onDeleteBtn}
            />
          );
        })}
      </div>
      {/*  */}
    </>
  );
}
