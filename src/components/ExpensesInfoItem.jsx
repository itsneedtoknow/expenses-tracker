import { Button } from "../UI/Button";
import styles from "./ExpensesInfoItem.module.css";

export function ExpensesInfoItem({ expense, onDeleteBtn }) {
  function onDeleteClick() {
    onDeleteBtn(expense.id);
  }
  return (
    <>
      {/* {console.log(expense)} */}
      <div className={styles.expense__item}>
        <p className="expense__name">{expense.name}</p>
        <p className="expense__category">{expense.category}</p>
        <p className="expense__amount">{expense.amount}</p>
        <Button
          className={styles.expense__button}
          type="button"
          onClick={onDeleteClick}
        >
          Удалить
        </Button>
      </div>
    </>
  );
}
