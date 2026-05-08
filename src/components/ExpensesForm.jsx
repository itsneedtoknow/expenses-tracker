import { useState } from "react";

export function ExpensesForm({ onSubmitExpenseItem }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  function onSubmitForm(e) {
    e.preventDefault();
    const newExpenseItem = {
      name: name,
      amount: amount,
      category: category,
    };
    onSubmitExpenseItem(newExpenseItem);
    setName("");
    setAmount("");
    setCategory("");
  }

  return (
    <div className="expenses__form">
      <div className="container-wrapper">
        <h2>Добавить расход</h2>
        <form onSubmit={(e) => onSubmitForm(e)}>
          <input
            type="text"
            placeholder="Название"
            name={name}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Сумма"
            amount={amount}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <select
            id="category"
            defaultValue=""
            value={category}
            category={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>
              Выберите категорию
            </option>
            <option value="house">Дом/Дача</option>
            <option value="car">Машина</option>
            <option value="credit">Кредит</option>
            <option value="food">Продукты</option>
            <option value="other">Другое</option>
          </select>
          <br />
          <button type="submit">Добавить</button>
        </form>
      </div>
    </div>
  );
}
