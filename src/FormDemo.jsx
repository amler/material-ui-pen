import { TextField } from "@mui/material";
import { useState } from "react";

export default function FormDemo () {
    const [name, setName] = useState('');
    const updateName = (e) => {
        setName(e.target.value);
    }
    return (
        <div>
            <p>Name is: {name}</p>
            <TextField 
                id="outlined-basic" 
                label="Name"
                onChange={updateName}
                placeholder="Jane"
                value={name} 
                variant="outlined" />
        </div>
    );
}