import React from 'react';

const MovieCard = (props) => {
  return (
    <>
      <div className="movie-card">
        <img className="card-left" src={`images/${props.movie.image_name}`} alt={`${props.movie.title} Movie Poster`} />
        <div className="card-right">
          <h3>{props.movie.title}</h3>
          <p>{props.movie.plot}</p>
          <a href={props.movie.link}><button>Visit Movie</button></a>
        </div>
      </div>
    </>
  )
}

export default MovieCard;