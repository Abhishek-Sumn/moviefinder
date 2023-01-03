import React from 'react'
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice'
import { useSelector } from 'react-redux'
import "../MovieListing/MovieListing.scss"
import MovieCard from "../MovieCard/MovieCard"

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  let renderMovies = "";
  let renderShows = "";


  renderMovies = movies.Response === "True" ?
    (movies.Search.map((movie, index) => {
      return <MovieCard key={index} data={movie} />;
    }))
    : (<div className="movies-error"><h3>{movies.error}</h3></div >)

  renderShows = shows.Response === "True" ?
    (shows.Search.map((shows, index) => {
      return <MovieCard key={index} data={shows} />;
    }))
    : (<div className="movies-error"><h3>{shows.error}</h3></div >)



  return (
    <div className='movie-wrapper'>
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>

      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">{renderShows}</div>
      </div>
    </div>
  )
}

export default MovieListing