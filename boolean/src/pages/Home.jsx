import React from 'react'

export default function Home() {
  return (
    <>
    <div style={{
      display:"flex"
      
    }}>
      <div>
      <p style={{
        // marginLeft:"200px",
        // marginTop:"50px",
        float:'right'
      }}>-Free 30 days trial</p>
     <h1 style={{
      marginTop:"100px",
      marginLeft:"40px"
      
     }}
     >The best way <br></br>to showcase <br></br>your project</h1>
     
     <p style={{
      marginRight:"70px"

     }}>Just like a solved puzzle we bring solutions to your project</p>

<button style={{
  height:"40px",
 
  float:"left"



}}
>Excersises</button>

<button style={{
   height:"40px",
   
}}>TraficLights</button>
</div>

<div>
<img style={{
      marginLeft:"100px"
     }} src={require("../assets/Games-Puzzles-Depressed-1210983054-removebg-preview.png")}></img>
</div>
    </div>
    </>
  )
}
 