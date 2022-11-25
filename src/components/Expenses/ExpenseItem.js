import './ExpenseItem.css';
import React, { useState } from 'react';
import { Card } from '../UI/Card';
import { ExpenseDate } from './ExpenseDate';
// Um componente é apenas uma função em javascript
// Para usar um componente em qualquer lugar, deve-se exporta-lo.
export const ExpenseItem = props => {
  // com o unico parametro recebemos todos os dados que foram passado a esse componente.
  // o parametro props recebe um objeto com todos os atributos.

  // useState é um hook que recebe um valor inicial
  // e retorna um state e um callback que atualiza o state.
  // hooks so podem ser utilizados dentro de componentes
  const [title, setTitle] = useState(props.expense.title);
  // você pode nomea-los como quiser, o que importa é a ordem
  // é dessa forma dados são manipulados, usando o state.

  // o state serve para guardar os dados de um componente
  // state guarda os dados e que podem ser atualizados.
  // geralmente manipuladores de eventos(events handlers) atualiza/muda o state.

  const clickHandler = () => {
    // setTitle atualiza o valor do state
    setTitle('Updated!');
    // existem outra formas de manipular um state, alem de eventos: uma resposta http ou um timer expirado.
  };

  return (
    // children são componentes dentro de outro componente customizado.
    <Card className="expense-item">
      <ExpenseDate date={props.expense.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.expense.amount}</div>
      </div>
      {/* o react disponibiliza events listeners como propriedades começando com "on" */}
      {/* o manipulador do evento é passsado como callback no evento */}
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};
