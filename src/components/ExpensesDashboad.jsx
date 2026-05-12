export function ExpensesDashBoard({ dashboardValue }) {
  return (
    <div className="expenses__dashboard">
      <div className="container-wrapper">
        <h1>Расходы за месяц</h1>
        <p>{`${dashboardValue} руб`}</p>
      </div>
    </div>
  );
}
