import React from 'react';
import style from './TodoListItem.module.css';
import PropTypes from 'prop-types';

export default function ToDoListItem({ todo, onRemoveTodo }) {
  const { title, id } = todo;
  return (
    <li className={style.ListItem}>
      {title}
      <button onClick={() => onRemoveTodo(id)}>Remove</button>
    </li>
  );
}

ToDoListItem.propTypes = {
  todo: PropTypes.object,
  onRemoveTodo: PropTypes.func,
};
