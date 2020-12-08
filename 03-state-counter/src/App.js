import React,{useState} from 'react';
import './App.css';

function App() {

  const [count,setCount]=useState(0)

  return (
    <div>
      <h1> Hello there I am the Counter App</h1>
      <h2> I am the Counter: {count}</h2>
      <button onClick={()=>setCount(0)}>Reset</button>
      <button onClick={()=>count>10?"":setCount(count+1)}>Increase the Value</button>
      <button onClick={()=>count<=0?"Hey there I can't go less than zero":setCount(count-1)}>Decrease the Value</button>

    </div>

    );
}

export default App;
