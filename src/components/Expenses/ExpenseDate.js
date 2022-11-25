import './ExpenseDate.css';
// Um componente é apenas uma função em javascript
// Para usar um componente em qualquer lugar, deve-se exporta-lo.
export const ExpenseDate = props => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};
