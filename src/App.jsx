import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RatingDemo from './RatingDemo'
import FormDemo from './FormDemo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <RatingDemo/> */}
        <FormDemo/>
      </div>
    </>
  )
}

export default App
