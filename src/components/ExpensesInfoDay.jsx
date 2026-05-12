import { ExpensesInfoItem } from "./ExpensesInfoItem";
import styles from "./ExpensesInfoDay.module.css";

export function ExpensesInfoDay({ onDeleteBtn, days }) {
  // if (expenses.length) {
  return (
    <>
      <div className={styles.expenses__list}>
        {Object.entries(days).map(([day, expenses]) => (
          <>
            <h4>{day}</h4>
            {expenses.map((expense, index) => (
              <ExpensesInfoItem
                expense={expense}
                key={index}
                onDeleteBtn={onDeleteBtn}
              />
            ))}
          </>
        ))}
      </div>
    </>
  );
}
// }
