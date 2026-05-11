import { useState } from "react";
import styles from "./ExpensesForm.module.css";
import { Categories } from "../data/categories";
import { Select } from "../UI/Select";

export function ExpensesForm({ onSubmitExpenseItem }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  // const [id, setId] = useState("");

  function onSubmitForm(e) {
    e.preventDefault();
    let dateofSubmit = new Date();
    const newExpenseItem = {
      id: Date.now(),
      month: dateofSubmit.getMonth() + 1,
      date: dateofSubmit.getDate(),
      name: name,
      amount: amount,
      category: category,
    };
    console.log(newExpenseItem);
    onSubmitExpenseItem(newExpenseItem);
    setName("");
    setAmount("");
    setCategory("");
  }

  return (
    <div className={styles.expenses__form}>
      <div className="container-wrapper">
        <h2>Добавить расход</h2>
        <form onSubmit={(e) => onSubmitForm(e)}>
          <input
            type="text"
            placeholder="Название"
            name={name}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Сумма"
            amount={amount}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <Select
            id="category"
            defaultValue=""
            options={Categories}
            defaultText={"Выберите категорию"}
            value={category}
            category={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
          <br />
          <button type="submit">Добавить</button>
        </form>
      </div>
    </div>
  );
}
