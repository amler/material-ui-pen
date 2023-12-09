import { useState } from 'react';
import { List } from '@mui/material';
import TodoItem from './TodoItem';

const dummyData = [
  {id: '1234', text: 'buy paint', completed: false},
  {id: '2345', text: 'remove popcorn ceiling', completed: true},
  {id: '3456', text: 'Repair threshold', completed: false},
];

export default function TodoList () {
  const [todos, setTodos] = useState(dummyData);
  const removeTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.id !== id);
    });
  };
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} removeTodo={() => removeTodo(todo.id)}/>
      ))}
    </List>
  );
}