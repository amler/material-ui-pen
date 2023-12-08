import { useState } from 'react';
import { List } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const dummyData = [
  {id: '1234', text: 'buy paint', completed: false},
  {id: '2345', text: 'remove popcorn ceiling', completed: true},
  {id: '3456', text: 'Repair threshold', completed: false},
];

export default function TodoList () {
  const [todos, setTodos] = useState(dummyData);
  
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {todos.map((todo) => {
        // const labelId = `checkbox-list-label-${value}`;
          return (
            <ListItem
              key={todo.id}
              secondaryAction={
                <IconButton edge="end" aria-label="comments">
                  <DeleteIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton role={undefined} dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={todo.completed}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': todo.id }}
                  />
                </ListItemIcon>
                <ListItemText id={todo.id} primary={todo.text} />
              </ListItemButton>
            </ListItem>
          );
        })}
    </List>
  );
}