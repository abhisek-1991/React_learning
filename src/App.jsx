import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Todo({ id, title }) {
  return (
    <div key={id}>
      <h1>{title}</h1>
    </div>
  );
}

function DataComponent() {
  const [todos, setTodos] = useState([]);
  const specificTodoId = [1,2,3,4]; // Define the specific todo ID here

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos/')
      .then(function (res) {
        setTodos(res.data);
        console.log(res.data); // Logging fetched data
      })
      .catch(function (error) {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {todos.map(todo => {
        for(let i=0;i<specificTodoId.length;i++){
        if (todo.id === specificTodoId[i]) {
          return <Todo key={todo.id} id={todo.id} title={todo.title} />;
        }
        }
        return null; // Render nothing if the IDs don't match
      })}
    </div>
  );
}

export default DataComponent;
