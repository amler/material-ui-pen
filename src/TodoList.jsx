import { List } from '@mui/material';
import { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const initialData = () =>  {
  const localData = JSON.parse(localStorage.getItem('todos'));
  if (!localData) return [];
  return localData;
}

export default function TodoList () {
  const [todos, setTodos] = useState(initialData);
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const removeTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };
  
  const toggleTodo = (id) => {
    setTodos(prevTodos => {
      return prevTodos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        } else {
          return todo;
        }
      })
    });
  }

  const addTodo = (text) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { text: text, id: 3, completed: false }];
    });
  };

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          toggle={() => toggleTodo(todo.id)} 
          remove={removeTodo} />
      ))}
      <TodoForm addTodo={addTodo}/>
    </List>
  );
}