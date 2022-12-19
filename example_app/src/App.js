import React from 'react';

function App() {

  const todos = [
    {id: 1, title: "review resources"},
    {id: 2, title: "take notes"},
    {id: 3, title: "code out app"},
  ]
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
      </ul>
    </div>
  );
}

export default App;
