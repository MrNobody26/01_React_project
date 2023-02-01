import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const day = props.date.getDate(); 
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    props.date
  );
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__month "> {year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
