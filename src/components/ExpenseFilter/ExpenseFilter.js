import React from "react";

import "./ExpenseFilter.css";
import { useState } from "react";

const ExpensesFilter = (props) => {
  const [yearVal, yearValUpdate] = useState("2020");

  const yearUpdater = (value) => {
    yearValUpdate(value.target.value);
    props.yearUpdate(value.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={yearVal} onChange={yearUpdater}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
