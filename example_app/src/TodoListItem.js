import React from 'react';

export default function ToDoListItem({ todo, onRemoveTodo }) {
  const { title, id } = todo;
  return (
    <li>
      {title}
      <button onClick={() => onRemoveTodo(id)}>Remove</button>
    </li>
  );
}
