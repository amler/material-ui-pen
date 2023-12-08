import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RatingDemo from './RatingDemo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <RatingDemo/>
      </div>
    </>
  )
}

export default App
