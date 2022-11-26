import React from "react";

// custom component MovieCard
const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>

      <div>
        <img
          //  thumbnail detection (API docs)
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400" // card of 400*400 with no thumbnail
          }
          alt={movie.Title}
        />
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
