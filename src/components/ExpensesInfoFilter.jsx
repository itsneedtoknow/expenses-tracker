import { Categories } from "../data/categories";
import { Months } from "../data/calendar";
export function ExpensesInfoFilter() {
  return (
    <div className="expenses__filter">
      <h3>Показать</h3>
      <select>
        <option value="" disabled>
          Все месяцы
        </option>
        {Object.entries(Months).map((item) => {
          return <option value={item[0]}>{item[1]}</option>;
        })}
      </select>
      <select>
        <option value="" disabled>
          Категория
        </option>
        {Categories.map((item) => {
          return <option value={item.id}>{item.label}</option>;
        })}
      </select>
    </div>
  );
}
