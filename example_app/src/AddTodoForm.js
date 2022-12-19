import React, {useState} from 'react'

export default function AddTodoForm({onAddTodo}){

  const [todoTitle, setTodoTitle] = useState("")

  function handleTitleChange(evt){
    const newTodoTitle = evt.target.value;
    setTodoTitle(newTodoTitle);
  }

  function handleAddTodo(event){
    event.preventDefault()
    onAddTodo({title: todoTitle, id: Date.now()})
    console.log(todoTitle)
    setTodoTitle("");
  }
  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="title" >Title</label>
      <input 
        type="text"
        id="todoTitle"
        name="title"
        value={todoTitle}
        onChange={handleTitleChange}/>
      <button type="submit">Add</button>
    </form>
  )
}