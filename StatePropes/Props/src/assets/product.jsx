import { useState } from "react";
function Product (props){
    console.log(props)

    let name = "peter Mumo"
    return  (
      
        <div className="product">
            <h2>Samsung S22</h2>
            {/* passing  data  stored  in a  variable */}
            <h3>{name}</h3>
            <h4>{props.name}</h4>
            <h1>{props.category}</h1>
          
          
        </div>
    )
}
export  default  Product;