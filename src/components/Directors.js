import React from "react";
import { directors } from "../data";

function Directors() {

  const displayPage = directors.map(director => {
    const movies = director.movies.map(mov => <li key={mov}>{mov}</li>)
    return (
      <div key={director.name}>
        <h2>Name: {director.name}</h2>
        <p>Movies:</p>
        <ul>{movies}</ul>
      </div>
    )
  })
  return (<div>
    <h1>Directors Page</h1>
    {displayPage}
  </div>)
}

export default Directors;
