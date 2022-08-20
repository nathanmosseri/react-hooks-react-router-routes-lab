import React from "react";
import { movies } from "../data";

function Movies() {


  const getTitles = movies.map((el, i) => {
    return(
      <div key={i + 15}>
      <h2 key={i}>Name: {el.title}</h2>
      <ul key={i + 2}>
        <li key={i + 8}>Time: {el.time}</li>
        <li key={i + 20}>
          Genres:
          <ul key={i + 25}>
            {el.genres.map((genre, i) => <li key={i}>{genre}</li>)}
          </ul>
        </li>
      </ul>
      </div>
    )
  })
  

  return (
  <div>
    <h1>Movies Page</h1>
    {getTitles}
  </div>
  )
}

export default Movies;
