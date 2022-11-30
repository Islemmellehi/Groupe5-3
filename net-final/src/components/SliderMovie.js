import React from "react";

import CardMovies from "./CardMovies";

function SliderMovie({ movies }) {
  const slice1 = movies.slice(0, 10);
  const slice2 = movies.slice(10, 20);
  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to);
  };


  return (
    <div>
      <CardMovies title="All" data={`${slice1}`}  />
    </div>
  );
}

export default SliderMovie;


