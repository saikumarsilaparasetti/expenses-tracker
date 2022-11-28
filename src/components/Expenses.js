// import ExpenseItem from "./ExpenseItem";
import "./Expences.css";
import Card from "./Card";
import ExpensesFilter from "./ExpenseFilter/ExpenseFilter";
import { useState } from "react";
import ExpencesList from "./ExpencesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  let originalExpenses = props.expenses;
  const [expenses, updateExpenses] = useState([...props.expenses]);

  const yearUpdate = (year) => {
    updateExpenses(
      originalExpenses.filter(
        (expense) => +expense.date.getFullYear() === +year
      )
    );
    console.log(year);
  };

  return (
    <div>
      <Card className="expences">
        <ExpensesFilter yearUpdate={yearUpdate} />
        <ExpensesChart expenses={expenses} />
        <ExpencesList items={expenses} />
      </Card>
    </div>
  );
}

export default Expenses;
