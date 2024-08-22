import React from 'react'

import Movie from "../assets/movies"
export default function Moviespage({movie}) {
    const data=  {
        id: 1,
        title: "The Quantum Paradox",
        director: "Aria Novak",
        year: 2023,
        genre: "Sci-Fi",
        rating: 8.7,
        description: "A mind-bending journey through parallel universes as a physicist tries to find her way home.",
        imageUrl: "https://images.pexels.com/photos/2531237/pexels-photo-2531237.jpeg"
      }

    
  return (
    <div style={{ width:"100%", height:"100%", display: 'flex',
        gridTemplateColumns: 'repeat(1, 0fr)',
        gap: '2px',
       }} className="movie-card">
        <div>
             <img src={data.imageUrl} style={{ width:"100%", height:"200px"}}></img>
        </div>
     
    <div style={{backgroundColor:"whitesmoke"}} className="movie-info">
     
        <h2>Movie :{data.id}  {data.title}</h2>
        <p>Director: Director 1{data.director}</p>
        <p>Rating:{data.rating}</p>
        <p>Genre:{data.genre}</p>
        <p>Released:{data.year}</p>
       
        <button>Go back</button>
        <div className="view-more">
          <h3>More Information</h3>
          <p>
          {data.description}
          </p>
        </div>
      </div>
    </div>
  );
}