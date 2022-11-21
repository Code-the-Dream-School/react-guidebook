import React from 'react'
import TodoListItem from './TodoListItem';

const todoList = [
    { id: 1, title: 'finish this' },
    { id: 2, title: 'eat dinner' },
    { id: 3, title: 'wash dishes' },
]

function TodoList() {
  return (
      <ul>
          {todoList.map(t => <TodoListItem key={t.id} title={t.title}/>)}
      </ul>
  )
}

export default TodoList;