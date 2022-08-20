import React from "react";
import { actors } from "../data";

function Actors() {

  const getActors = actors.map((actor, i) => {
    return (
    <div key={i}>
      <h1>Name: {actor.name}</h1>
      Movies: 
      <ul>
        {actor.movies.map((movie, i) => <li key={i}>{movie}</li>)}
      </ul>
    </div>
    )
  })

  return (
  <div>
    <h1>Actors Page</h1>
    {getActors}
  </div>
  )
}

export default Actors;
