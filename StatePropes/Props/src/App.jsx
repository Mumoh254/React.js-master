import { useState } from 'react'
import Product from './assets/product'
import User from './assets/user'
import './App.css'
function App() {
  
  const [count, setCount] = useState(0)
  return (
        <div>
          <Product name="iphone 14" price="2000" specs={{ram:"2gb",size:"17cm"}}/>
          <Product name="oppo reno7 "  category={['electronics' , 'kitchen']} />
          <User  name={["peter" ,"joice" , "ezra"]}/>
          <h1>Main  component</h1>
        </div>
  )
}
export default App
