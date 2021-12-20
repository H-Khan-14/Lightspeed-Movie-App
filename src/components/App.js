import React, { useState } from 'react';
import './App.css';
import MovieList from './MovieList';
import { contentData } from './content';

const App = () => {

  const [movies, setMovies] = useState(contentData.movies);
  const handleChange = (e) => {
    const filteredList = contentData.movies.filter((movie) => movie.genre.includes(e.target.value))
    setMovies(filteredList);
  }

  return (
    <div>
      <header>
        <h1>Movies</h1>
      </header>
      <section className="genre-sec">
        <label htmlFor="genres">Filter movies by genre:</label>
        <select name="genres" id="genres" onChange={handleChange} >
          <optgroup label="Movie Genres:">
            <option>All</option>
            <option value="action">Action</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="drama">Drama</option>
            <option value="fantasy">Fantasy</option>
            <option value="horror">Horror</option>
            <option value="mystery">Mystery</option>
            <option value="scifi">Sci-fi</option>
          </optgroup>
        </select>
      </section>
      <main>
        <div>
          <MovieList movies={movies} />
        </div>
      </main>
    </div>
  );
};

export default App;