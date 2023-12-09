import { List,Typography, Box } from '@mui/material';
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
      return [...prevTodos, { text: text, id: crypto.randomUUID(), completed: false }];
    });
  };

  return (
    <Box
    sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        m: 3,
    }}>
      <Typography variant="h2" color="inherit" component="h1">
            Todos:
      </Typography>
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
    </Box>
  );
}