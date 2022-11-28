import "./NewExpenseForm.css";
import { useState } from "react";

const NewExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");

  const [enteredAmount, setEnteredAmount] = useState("");

  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const formHandler = (event) => {
    event.preventDefault();
    const formData = {
      id: Math.random(),
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(formData);
    console.log(formData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };

  const cancelClickHandler = () => {
    props.clickCancel();
  };
  return (
    <form onSubmit={formHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2010-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
        <div className="new-expense__actions">
          <button type="submit" onClick={cancelClickHandler}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default NewExpenseForm;
