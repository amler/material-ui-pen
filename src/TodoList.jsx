import { useState } from 'react';
import { List } from '@mui/material';


const dummyData = [
  {id: '1234', text: 'buy paint', completed: false},
  {id: '2345', text: 'remove popcorn ceiling', completed: true},
  {id: '3456', text: 'Repair threshold', completed: false},
];

export default function TodoList () {
  const [todos, setTodos] = useState(dummyData);

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {/* {.map((value) => {
        
      } */}
    </List>
  );
}