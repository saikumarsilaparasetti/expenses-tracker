import { useState } from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm.js";

const NewExpense = (props) => {
  const [flag, setFlag] = useState(false);

  const saveExpenseDataHandleer = (data) => {
    const expenseData = {
      ...data,
    };
    props.saveExpense(expenseData);

    // console.log(data);
  };

  const clickCancelHandler = () => {
    setFlag(false);
  };
  const addNewExpense = () => {
    setFlag(true);
  };

  return (
    <div className="new-expense">
      {flag ? (
        <NewExpenseForm
          onSaveExpenseData={saveExpenseDataHandleer}
          clickCancel={clickCancelHandler}
        />
      ) : (
        <button className="new-expense" onClick={addNewExpense}>
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
