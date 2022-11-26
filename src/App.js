import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

// 69974748  API key

import "./App.css";
import SearchIcon from "./search.svg";
const API_URL = "http://www.omdbapi.com?apikey=69974748"; // API to retrieve movie data


const App = () => {
  const [movies, setMovies] = useState([]); 
  const [search, setSearch] = useState(""); 

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`); //fetch movie data from API
    const data = await response.json(); // convert into json

    setMovies(data.Search); // render movie data
  };
  useEffect(() => {
    searchMovies("Spiderman"); // default search value
  }, []);
  return (
    <div className="app">
      <h1>VodFlix</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
          type="text"
        />
        <img
          src={SearchIcon}
          alt="Search"
          onClick={() => searchMovies(search)}
        />
      </div>

    {/* list all the avalable movies */}
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="epmty">
          <h2>No Movies Found</h2> 
        </div>
      )}
    </div>
  );
};

export default App;
