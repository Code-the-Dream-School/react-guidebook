import React, { useState } from 'react';
import InputWithLabel from './InputWithLabel';

export default function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState('');

  function handleTitleChange(evt) {
    const newTodoTitle = evt.target.value;
    setTodoTitle(newTodoTitle);
  }

  function handleAddTodo(event) {
    event.preventDefault();
    onAddTodo({ title: todoTitle, id: Date.now() });
    setTodoTitle('');
  }

  return (
    <form onSubmit={handleAddTodo}>
      <InputWithLabel
        todoTitle={todoTitle}
        handleTitleChange={handleTitleChange}
      >
        Title
      </InputWithLabel>
      <button type="submit">Add</button>
    </form>
  );
}
