import { useState } from "react";
import React from 'react';
// props drilling, I am passing into the props and then to the child props => child uses props

const GrandChild=props=>{
  return(
    <div>
      <h1>GrandChild:</h1>
      <Child brand={props.brand}/>
    </div>
  )
}

const Child=props=>{
  return(
    <div>
        <h1>Child: {props.brand}</h1>
      
    </div>
  )
}



const App = ()=>{
  const [brandName] = useState("Amazon");
  return (
    <div>
    <h1>Helloo</h1>
    
    <GrandChild brand = {brandName}/>
    </div>
  );
}

export default App;
