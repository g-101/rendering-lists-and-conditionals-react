import React, { useState } from 'react';
import './Expenses.css';
import { Card } from '../UI/Card';
import { ExpenseItem } from './ExpenseItem';
import { ExpensesFilter } from './ExpensesFilter';

export const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.expenses.filter(
    expense => expense.date.getFullYear().toString() === filteredYear
  );
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {filteredExpenses.map(expense => (
        // sempre deve ter um index quando interar sobre listas
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
      {/* isso evita a repetição abaixo */}
      {/* <ExpenseItem expense={props.expenses[0]} />
      <ExpenseItem expense={props.expenses[1]} />
      <ExpenseItem expense={props.expenses[2]} />
      <ExpenseItem expense={props.expenses[3]} /> */}
    </Card>
  );
};
