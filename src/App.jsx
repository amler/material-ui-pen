import { useState } from 'react'
import { CssBaseline } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CssBaseline/>
      <h1>Todos: </h1>
    </>
  )
}
// const dummyData: [
//   {id: '1234', text: 'buy paint', completed: false},
//   {id: '2345', text: 'remove popcorn ceiling', completed: false},
//   {id: '3456', text: 'Repair threshold', completed: false},
// ]
export default App
