import React from 'react'
import { useState } from 'react';

export default function Cards() {
    const[num1, setNum1] = useState("");
    const[num2, setNum2] = useState("");
    const[results, setResults] = useState("");

    const Bignumber = (num1, num2) =>{
        if(num1>num2){
            return num1;
        }
        else if(num2>num1){
            return num2;
        }
           
        else{
            return "Both numbers are equal"
        }

    }

const Handlecalculate = (e)=>{
e.preventDefault();

const check = Bignumber(parseFloat(num1), parseFloat(num2)) ;
setResults(check)


}
  return (
    <div style={{
        justifyContent:"center",
        display:"flex",
    }}>
       <div className="w3-card-4">

<header className="w3-container w3-yellow">
  <h3 style={{
    color:"darkGreen"
  }}>What is the biggest number?</h3>
</header>

<div className="w3-container">
  <form onSubmit={Handlecalculate} >
   Num1 <input type='number'
                value={num1}
                onChange={(e)=>setNum1(e.target.value)}
   ></input>
   Num2 <input type='number'
                value={num2}
                onChange={(e)=>setNum2(e.target.value)}
            ></input>
 
 <button  className="w3-button w3-block w3-green">Calculate</button>
  </form>
  
  
  <hr/>
  
</div>

<footer className="w3-button w3-block w3-green">Output:{results}</footer>

</div>
    </div>
  )
}
