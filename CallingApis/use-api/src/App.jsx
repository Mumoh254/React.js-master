import { useState } from 'react'

import './App.css'
import Use from './assets/demo'
import Product from './assets/product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Use/>
      <Product/>
    </>
  )
}

export default App
