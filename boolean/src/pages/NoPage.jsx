import React from 'react'

export default function NoPage() {
  return (
    <div style={{
      
      alignItems:"center",
      display:"flex",
      justifyContent:"center"
    }}>
      <h1>Page not found</h1>
      <br></br>
      <img style={{
        width:"250px",
        height:"230px",
        
      }} src={require("../assets/shutterstock_479042983.jpg")} alt='404not found'></img>
    </div>
  )
}
