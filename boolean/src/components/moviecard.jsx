import React from 'react';
import { Link } from 'react-router-dom';
export default function MovieCard({ movie }) {
  return (
    <div className="movie-card" style={{
      display: "flex",
    flexDirection: "colomn",
    // alignItems: "center",
    padding: "20px",
    border: "1px solid #ddd",
    borderradius: "10px",
    boxShadow:" 0 0 10px rgba(0, 0, 0, 0.1)",
    width: "250px", 
    margin: "20px", 
    }}>
      <img src={movie.imageUrl} alt={movie.title.id} className="movie-poster" />
      <div className="movie-info">
        <h2 className="movie-title">{movie.title}</h2>
        <p className='movie-director'>Director :{movie.director}</p>
        <p className="movie-rating">Rating: {movie.rating}/10</p>
        <p className="movie-genre">Genre : {movie.genre}</p>
        <p className="movie-release-year">Released: {movie.year}</p>
        <p className="movie-description">Description :{movie.description}</p>
 <Link to={`${movie.id}`}><button>Read more</button></Link>
      </div>
    </div>
  );
}