import React from 'react';
import Cards from '../components/cards';
import Card2 from '../components/Card2';

export default function Blogs() {
  return (
    <>
    <div
    style={{
      backgroundImage: `url(${require("../assets/img.jpg")})`,
      width:"100%",
      height:"300px",
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
      alignContent:"center",
      justifyContent:"center",
      display:"flex",
      

    }}>
      <h1 style={{
        color:"white"
      }}>Exercises</h1>
 
     


      
    </div>
   <div style={{
    width:"200px",
    height:"200px",
    alignContent:"center",
    justifyContent:"center",
    display:"flex",
    alignItems:"center",
    marginLeft:"600px",
    gap:"20px",
   marginTop:"100px"

   }}>
   <Cards/>
  <Card2 />
   </div>
    </>
  )
}
