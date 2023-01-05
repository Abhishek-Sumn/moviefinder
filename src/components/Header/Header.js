import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'
import user from "../../images/user.png"
import "./Header.scss"


const Header = () => {

  const [term, setTerm] = useState("");
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault();
    if (term === "") return alert("Enter Text To Search")
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("")

  }
  return (

    <div className="header">


      <div className="logo">
        <Link to="/moviefinder"> Movie App </Link>
      </div>


      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input type="text" value={term} placeholder="  Search Movies Or Show"
            onChange={(e) => setTerm(e.target.value)} />
          <button type='submit' ><i className='fa fa-search'></i></button>
        </form>
      </div> 
     


      <div className="user-image">
        <img src={user} alt="userimage" />
      </div>

    </div>
  )
}

export default Header