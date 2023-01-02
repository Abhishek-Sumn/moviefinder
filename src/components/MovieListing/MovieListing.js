import React from 'react'
import { getAllMovies } from '../../features/movies/movieSlice'
import { useSelector } from 'react-redux'
import "../MovieListing/MovieListing.scss"
import MovieCard from "../MovieCard/MovieCard"

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  let renderMovies = "";

  renderMovies = movies.Response === "True" ?
    (movies.Search.map((movie, index) => {
      return <MovieCard key={index} data={movie} />;
    }))
    : (<div className="movies-error"><h3>{movies.error}</h3></div >)


  return (
    <div className='movie-wrapper'>
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
    </div>
  )
}

export default MovieListing