import styles from "./ExpensesInfoFilter.module.css";
export function ExpensesInfoFilter() {
  return (
    <div className={styles.expenses__filter}>
      <h3>Показать</h3>
      <select>Все</select>
      <select>Категория</select>
    </div>
  );
}
