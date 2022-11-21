import React from 'react'

export default function AddTodoForm(props) {
    function handleAddTodo(event){
        event.preventDefault()
        const todoTitle=event.target.title.value
        props.onAddTodo(todoTitle)
        event.target.reset()
    }
  return (
    <form onSubmit={handleAddTodo}>
        <label htmlFor='todoTitle'>Title</label>
        <input name='title' type="text" id="todoTitle"/>
        <button type="submit">Add</button>
    </form>
  )
}
