import { TextField } from "@mui/material";
import { useState } from "react";
import {Box} from "@mui/material";

export default function FormDemo () {
    const [name, setName] = useState('');
    const updateName = (e) => {
        setName(e.target.value);
    }
    return (
        <Box sx={{
            border: '1px solid pink',
            p: 4,
            margin: '0 auto',
            width: 900
        }}>
            <p>Name is: {name}</p>
            <TextField 
                id="outlined-basic" 
                label="Name"
                onChange={updateName}
                placeholder="Jane"
                value={name} 
                variant="outlined" />
        </Box>
    );
}