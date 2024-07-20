import { useState } from 'react'

import './App.css'
import Country from './assets/Country'

function App() {

  let  data =  [
    {
      country: "United States",
      capital: "Washington, D.C.",
      population: 331002651,
      governance: "Federal Presidential Constitutional Republic"
    },
    {
      country: "Canada",
      capital: "Ottawa",
      population: 37742154,
      governance: "Federal Parliamentary Constitutional Monarchy"
    },
    {
      country: "Germany",
      capital: "Berlin",
      population: 83166711,
      governance: "Federal Parliamentary Republic"
    }
   
  ]

 
console.log(data)
  
  //react   variable   var  name   countries
   let [countries , setCountries] = useState(data)
  const [count, setCount] = useState(0)


  {countries.map((country)=>{
    console.log(country)
    return ( <Country name={country.country} capital={country.capital} pop={country.population} gov={country.governance}/> )
  })}
  return (
    <>
    
     <Country  name={countries[0].country} capital={countries[0].capital}/>
    </>
  )
}

export default App;
