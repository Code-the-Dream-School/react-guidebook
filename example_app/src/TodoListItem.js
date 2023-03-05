import React from 'react';
import style from './TodoListItem.module.css';

export default function ToDoListItem({ todo, onRemoveTodo }) {
  const { title, id } = todo;
  return (
    <li className={style.ListItem}>
      {title}
      <button onClick={() => onRemoveTodo(id)}>Remove</button>
    </li>
  );
}
