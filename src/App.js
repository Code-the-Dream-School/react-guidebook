import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
    const [newTodo, setNewTodo] = useState('second')
    return (
        <>
            <h1>Todo List</h1>
            <TodoList />
            <AddTodoForm onAddTodo={setNewTodo}/>
            <p>{newTodo}</p>
        </>
    );
}

export default App;
