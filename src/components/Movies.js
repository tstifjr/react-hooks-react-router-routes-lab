import React from "react";
import { movies } from "../data";


function Movies() {
  const displayPage = movies.map(movie => {
    const genre = movie.genres.map(ele=><li key={ele}>{ele}</li>)
    return (
  <div key={movie.title}>
    <h2>Name: {movie.title}</h2>
    <p>Time: {movie.time}</p>
    <p>Genres:</p>
    <ul>{genre}</ul>
  </div> 
    )
  })
  return <div>
    <h1>Movies Page</h1>
    {displayPage}
  </div>;
}

export default Movies;
