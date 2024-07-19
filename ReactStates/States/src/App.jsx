import { useState } from 'react'
import State from './assets/state'

import './App.css'
import User from './assets/user'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <User/>
      <State/>
    </>
  )
}

export default App
