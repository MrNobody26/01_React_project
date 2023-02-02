import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";

const NewExpenses = (props) => {
  const [show, setShow] = useState(false);

  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random() * 100).toString(),
    };
    console.log("inside NewExpense");
    props.onAddExpense(expenseData);
    setShow(false);
  };

  const cancelHandler = () => {
    setShow(false);
  };

  const addHandler = () => {
    setShow(true);
  };

  return (
    <div className="new-expense">
      {!show && (
        <button type="button" onClick={addHandler}>
          Add Expense
        </button>
      )}
      {show && (
        <ExpenseForm onExpenseSave={saveExpenseData} onCancel={cancelHandler} />
      )}
    </div>
  );
};

export default NewExpenses;
