import { useState } from "react";

function  State  ()
{
    //variable  and  a  function
    let [name , setName] = useState("peter");
   //  let  name  =   "peter";
   let [age , setAge] = useState("32")
   //change  variable  name 
   function changeName (){
    setName("John");
   }
   
   function changeAge ()
   {
     setAge("37")
   }

   function  doSomething (city)
   {
    console.log(city)
   }
    return (
         <div  className="state">

            <h1>{name}</h1>
             <h2>{age}</h2>
            <button className="btn" onClick={changeName}>Click</button>
            <button className="btn" onClick={changeAge}>Click</button>

            <button className="btn" onClick={doSomething.bind(this,"Mainland")}>Do  Something</button>
            <button className="btn" onClick={function(){
                doSomething("China")

                
                console.log("do  something")
            }}>Do  Something</button>
         </div>
    )
}

export   default  State