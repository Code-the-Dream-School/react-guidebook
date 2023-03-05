import React, { useState } from 'react';
import InputWithLabel from './InputWithLabel';
import style from './AddTodoForm.module.css';
import PropTypes from 'prop-types';

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

  //applies form styles via css module (note global scope!)
  //applies .submit styles to button via css module

  return (
    <form onSubmit={handleAddTodo}>
      <InputWithLabel
        todoTitle={todoTitle}
        handleTitleChange={handleTitleChange}
      >
        Title
      </InputWithLabel>

      <button
        type="submit"
        className={style.submit}
        disabled={todoTitle.length === 0}
      >
        Add
      </button>
    </form>
  );
}

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func,
};
