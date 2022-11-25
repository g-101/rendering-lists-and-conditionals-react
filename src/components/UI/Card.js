// Vai servir como um shell para qualquer grupo de componentes
import './Card.css';
export const Card = props => {
  // children é uma plavra reservada e que sera sempre o conteudo entre a tag de abertura e fechamento
  // classes serve para juntar(concatenar) com a classe que esta no children.
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
};
