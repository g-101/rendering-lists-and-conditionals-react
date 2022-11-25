import './Expenses.css';
import { ExpenseItem } from './ExpenseItem';
// Um componente é apenas uma função em javascript
// Para usar um componente em qualquer lugar, deve-se exporta-lo.
export const Expenses = props => {
  // Um componente retorna apenas um elemento por vez
  return (
    //  para aplicar o css colocamos className. Aqui o JSX por debaixo dos panos é apenas javascript no final.
    <div className="expenses">
      <ExpenseItem expense={props.expenses[0]} />
      <ExpenseItem expense={props.expenses[1]} />
      <ExpenseItem expense={props.expenses[2]} />
      <ExpenseItem expense={props.expenses[3]} />
    </div>
  );
};
