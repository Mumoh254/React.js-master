import { useState } from "react";


function Country(props)
{

    //variable  holding  data  for  all  countries 
 

    return (

        <div className="country">
         
         <h1>{props.Country}</h1>
         <h2>{props.capital}</h2>
      

        </div>
    )
}

export  default Country;
