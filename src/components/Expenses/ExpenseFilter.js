import React, { useState } from 'react';

import './ExpenseFilter.css';

const ExpensesFilter = (props) => {
   
    
const getYear=(event)=>{
    console.log("inside Option event");
    let year=event.target.value;
    props.onGetYear(year);
    
}

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={getYear}>
        <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;