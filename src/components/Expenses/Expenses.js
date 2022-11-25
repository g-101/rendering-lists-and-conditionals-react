import './Expenses.css';
import { Card } from '../UI/Card';
import { ExpenseItem } from './ExpenseItem';

export const Expenses = props => {
  return (
    <Card className="expenses">
      {props.expenses.map(expense => (
        <ExpenseItem expense={expense} />
      ))}
      {/* <ExpenseItem expense={props.expenses[0]} />
      <ExpenseItem expense={props.expenses[1]} />
      <ExpenseItem expense={props.expenses[2]} />
      <ExpenseItem expense={props.expenses[3]} /> */}
    </Card>
  );
};
