import React, { useEffect } from 'react'
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi"
import { APIKey } from "../../common/apis/movieApiKey"

const Home = () => {

  useEffect(() => {

    const movieText = "Harry";

    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log("Error", err)
        })
      console.log("Response ", response)
    }
    fetchMovies();

  }, [])


  return (
    <div>

      <div className='banner-img'>Home</div>
      <MovieListing />

    </div>
  )
}

export default Home