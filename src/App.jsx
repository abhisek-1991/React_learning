import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Moved the Todo component outside of DataComponent
function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
     
    </div>
  );
}

function DataComponent() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos/')
      .then(function (res) {
        setTodos(res.data); // Use res.data directly
      })
      .catch(function (error) {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {todos.map(todo => (
        console.log(todos),
        <Todo key={todo.id} title={todo.title}  />
        // Use todo.body instead of todo.description for the description
      ))}
    </div>
  );
}

export default DataComponent;
