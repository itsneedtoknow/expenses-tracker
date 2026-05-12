import { Categories } from "../data/categories";
import { Months } from "../data/calendar";
import { Select } from "../UI/Select";
import styles from "./ExpensesInfoFilter.module.css";
export function ExpensesInfoFilter({
  selectedMonth,
  onMonthChange,
  onCategoryChange,
  selectedCategory,
}) {
  return (
    <div className={styles.expenses__filter}>
      <h3>Показать</h3>
      <Select
        options={Months}
        isObject={true}
        defaultText={"Все месяцы"}
        onChange={onMonthChange}
        value={selectedMonth}
      />
      <Select
        options={Categories}
        defaultText={"Категория"}
        onChange={onCategoryChange}
        value={selectedCategory}
      />
    </div>
  );
}
