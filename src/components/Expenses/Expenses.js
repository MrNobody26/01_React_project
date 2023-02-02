import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const saveYear = (year) => {
    console.log("got it from filtered year", year);
    setFilteredYear(year);
  };

  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() == filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onGetYear={saveYear} />
        <ExpensesChart expense={filteredExpense}/>
        <ExpensesList items={filteredExpense} />
      </Card>
    </div>
  );
};

export default Expenses;
