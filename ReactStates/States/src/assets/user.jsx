import { useState } from "react";
function User ()

{
    // example   of  a  state 

    let  name = "peter";
    let  age   =  23;
    let  city  =  "New  York";

    console.log(name);
    console.log(age)

      function changeName ()
      {
        name = "Ester"
        age =  45;
        city   =  "Berlin"

        console.log(name)
        console.log( `new name  is ${name} and  i  am ${age} years  old `)
        console.log(`new  age   is  ${age}`)
        console.log(`I  live  in the  city  of  ${city}`)
      }

    return  (
         <div className="user">
            <h1>{name}</h1>

            <button className="btn" onClick={changeName}>Click</button>
         </div>
    )
}
export default User;