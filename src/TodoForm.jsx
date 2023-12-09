import { ListItem } from "@mui/material";
import { TextField } from "@mui/material";
import {InputAdornment} from "@mui/material";
import {IconButton} from "@mui/material";
import { Create } from "@mui/icons-material";
import { useState } from "react";

export default function TodoForm ({addTodo}) {
    const [text, setText] = useState('');
    const handleChange = (e) => {
        setText(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText('');
    }
    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="outlined-basic" 
                    label="Add Todo" 
                    variant="outlined" 
                    onChange={handleChange} 
                    value={text}
                    InputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="Add todo item"
                            edge="end"
                            type="submit"
                            >
                                <Create/>
                            </IconButton>
                        </InputAdornment>
                        )
                    }} 
                />
            </form>
        </ListItem>
    );
}