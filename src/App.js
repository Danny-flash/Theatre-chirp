import React, { useState, useEffect } from "react";
import search from "./search.svg"
import Moviecard from "./Moviecard";
import "./App.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css'


const App = () => {
  const [input, setInput] = useState("");
  const [movies, setMovies] = useState([]);
 
 //const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=efcc0b70"

  useEffect(() => {
    searchMovies("Harry potter");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };
  
  return (
    <div className="app" >
      <h1>Theatre Chirp</h1>

      <div className="search">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={search}
          alt="search"
          onClick={() => searchMovies(input)}
        />
      </div>

      {movies?.length > 0 ? (

       
        <Splide className="container" 
        options={{
          perPage: 2,
         arrows: false,
         pagination: false,
         drag: "free",
         gap: "5rem"
        }}
        >
          {movies.map((movie) => (
            <SplideSlide>
            <Moviecard movie={movie} />
            </SplideSlide> 
          ))}
          </Splide>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=efcc0b70"