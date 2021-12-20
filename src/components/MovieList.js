import React from 'react';
import MovieCard from './MovieCard';

const MovieList = (props) => {
  return (
    <div className="mov-list">
      {props.movies.map((movie, key) => {
        return (
          <div className="mov-item" key={key}>
            <MovieCard movie={movie} />
          </div>
        );
      })}
    </div>
  );
}

export default MovieList;