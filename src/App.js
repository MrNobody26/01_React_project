import React, { useState } from "react";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import Expenses from "./components/Expenses/Expenses";

const DummyExpense = [
  {
    id: "e1",
    title: "Table Carpet",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DummyExpense);

  const saveExpenseHandler = (formData) => {
    console.log("in App.js");
    console.log(formData);
    setExpenses((prevExpenses) => {
      return [formData, ...prevExpenses];
    });
    console.log(expenses);
  };

  return (
    <div>
      <NewExpenses onAddExpense={saveExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
