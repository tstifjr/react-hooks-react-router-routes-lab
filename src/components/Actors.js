import React from "react";
import { actors } from "../data";

function Actors() {

  const displayPage = actors.map(actor => {
    const movies = actor.movies.map(mov => <li key={mov}>{mov}</li>)
    return (
      <div key={actor.name}>
        <h2>Name: {actor.name}</h2>
        <p>Movies:</p>
        <ul>{movies}</ul>
      </div>
    )
  })

  return <div>
    <h1>Actors Page</h1>
    {displayPage}
  </div>;
}

export default Actors;
