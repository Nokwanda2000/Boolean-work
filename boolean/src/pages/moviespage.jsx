import React from 'react'
import MovieCard from '../components/moviecard';
import { Link } from 'react-router-dom';
import Movies from "../assets/movies"
import { useParams } from 'react-router-dom';




export default function Moviespage() {
    const{id}= useParams();
     console.log(id)
   
  
  return (
    <>
    <div style={{ width:"100%", height:"100%", display: 'flex',
                     border:" 1px solid #ddd",
                     borderRadius: "10px",
                     boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                     gap:"10px",
                     justifyContent:"center",
                     padding:"40px"
      
       }}  >
        <div>
             <img src={Movies[id].imageUrl} style={{ width:"100%", height:"500px"}}></img>
        </div>
     
    <div style={{backgroundColor:"whitesmoke", borderRadius:"10px"}} className="movie-info">
     
        <h2>Movie :{Movies[id].title}</h2>
        <p>Director: Director 1{Movies[id].director}</p>
        <p>Rating:{Movies[id].rating}</p>
        <p>Genre:{Movies[id].genre}</p>
        <p>Released:{Movies[id].year}</p>
       <hr></hr>
     <Link to=".."  > <button className='btn' style={{color:"white", border:"white", borderRadius:"10px", width:"100px", height:"40px",}}>Go back</button></Link>
    
          <h3 style={{fontSize:"48px",
    fontWeight: "bold",
    color:"#333"}}>More Information</h3>
          <p>
          {Movies[id].description}
          </p>
        
      </div>
    </div>
    </>
  );
}