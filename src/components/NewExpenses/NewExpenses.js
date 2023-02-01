import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";

const NewExpenses = (props) => {
  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random()*100).toString(),
    };
    console.log("inside NewExpense");
    props.onAddExpense(expenseData);

  };

  return (
    <div className="new-expense">
      <ExpenseForm onExpenseSave={saveExpenseData} />
    </div>
  );
};

export default NewExpenses;
