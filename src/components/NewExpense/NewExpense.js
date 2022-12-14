import React from 'react';
import './NewExpense.css';
import { ExpenseForm } from './ExpenseForm';

export const NewExpense = props => {
  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random.toString(),
    };
    console.log('Em NewExpense', expenseData);
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};
