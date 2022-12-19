import React from 'react'

export default function AddTodoForm(props){

  function handleAddTodo(event){
    event.preventDefault()
    const todoTitle = event.target.title.value
    props.onAddTodo(todoTitle)
    console.log(todoTitle)
    event.target.title.value = ""
  }
  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="title" >Title</label>
      <input type="text" id="todoTitle" name="title" />
      <button type="submit">Add</button>
    </form>
  )
}