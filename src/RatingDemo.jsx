import Rating from '@mui/material/Rating';
import { useState } from 'react';

export default function RatingDemo () {
    const [score, setScore] = useState(0);
    return (
        <div>
            <h1>Rating Demo</h1>
            <h2>Current Score: {score}</h2>
            <Rating
            name="simple-controlled"
            value={score}
            onChange={(event, newValue) => {
                setScore(newValue);
            }}
          />
        </div>
    );
}