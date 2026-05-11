import { Categories } from "../data/categories";
import { Months } from "../data/calendar";
import { Select } from "../UI/Select";
import styles from "./ExpensesInfoFilter.module.css";
export function ExpensesInfoFilter() {
  return (
    <div className={styles.expenses__filter}>
      <h3>Показать</h3>
      <Select options={Months} isObject={true} defaultText={"Все месяцы"} />
      <Select options={Categories} defaultText={"Категория"} />
    </div>
  );
}
