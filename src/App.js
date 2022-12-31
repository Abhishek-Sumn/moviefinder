
import './App.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import MovieDetail from "./components/MovieDetail/MovieDetail"
import PageNotFound from "./components/PageNotFound/PageNotFound"



function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Header></Header>


        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbID" componenet={<MovieDetail />} />
          <Route path="*" element={<PageNotFound />} />

        </Routes>


        <Footer></Footer>

      </BrowserRouter>

    </div>
  );
}

export default App;
