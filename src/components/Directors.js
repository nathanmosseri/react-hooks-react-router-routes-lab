import React from "react";
import { directors } from "../data";

function Directors() {

  const getDirectors = directors.map((director, i) => {
    return (
      <div key={i}>
        <h2>Name: {director.name}</h2>
        Movies:
        <ul> 
          {director.movies.map((movie, i) => <li key={i}>{movie}</li> )}
        </ul>
      </div>
    )
  })

  return (
  <div>
    <h1>Directors Page</h1>
    {getDirectors}
  </div>
  )
}

export default Directors;
