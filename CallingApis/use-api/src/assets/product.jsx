import { useEffect, useState } from "react";


function   Product  ()
{

  //  sate   var

    let[name , useName]  = useState("Iphone 14")
     
    function  change  ()  {
       useName("samsung");
       console.log("Changing  State  Of  A  Component")
    }
    useEffect(()=>{
        console.log("Component   is  moulding  phase")

        //function  to  call  wen  unmolding

        return (()=>{
            console.log("Component  is  in  unmounting  phase")

        })
    },[])
    
    let  [cars , setCars] = useState([]);
     cars.map((ele)=>{})

    useEffect(()=>{
     
        fetch('https://freetestapi.com/api/v1/cars  ')
            .then(response=>response.json())
            .then((data)=>{
                console.log(data)
                setCars(data)
            })
            .catch((err)=>{
                console.log(err)
            })
            
    },[])

    return (


        <div className="product">
           {
            cars.map((ele)=>{
               
                return(
                    
                    <div className="cars">
                       
                        <div className="child">

                        <h1>{ele.make}</h1>
                        <img src={ele.image} alt="" className="img" />

                        </div>

                    </div>
                )

            })
           }
        

      
        </div>
    )
}

export  default  Product;