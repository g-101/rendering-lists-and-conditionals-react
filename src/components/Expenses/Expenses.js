import './Expenses.css';
import { Card } from '../UI/Card';
import { ExpenseItem } from './ExpenseItem';

export const Expenses = props => {
  return (
    <Card className="expenses">
      {props.expenses.map(expense => (
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
