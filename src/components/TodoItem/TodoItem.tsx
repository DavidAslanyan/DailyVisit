import './_todoItem.scss';
import { useState } from 'react';

interface TodoItemProps {
  id: number;
  index: number,
  title: string;
  isComplete: boolean;
  onDelete: (val: number) => void;
  onCheck: (val: number) => void;
}

function TodoItem(props: TodoItemProps) {
  const { id, index, title, isComplete, onDelete, onCheck } = props;

  const [showMore, setShowMore] = useState(true);

  return (
    <li className="todo__item">
      <span className="todo__index">{index + 1})</span>
      <input onClick={() => onCheck(id)} className="todo__checkbox" type='checkbox' value={isComplete ? 'true' : 'false'}/>
      <p className="todo__text">{title.length > 30 ? <p>{title.substring(0, 20)}...</p> : title}</p>
      <button onClick={() => onDelete(id)} className="todo__close">&times;</button>
    </li>
  )
}

export default TodoItem
