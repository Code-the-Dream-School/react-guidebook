import React from 'react';
import ToDoListItem from './TodoListItem';

export default function TodoList({ todoList }) {
  return (
    <ul>
      {todoList.map((todo) => (
        <ToDoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
