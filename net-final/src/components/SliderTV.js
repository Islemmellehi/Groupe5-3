import React from "react";
import CardSlider from "./CardSlider";
import cover from "../imgs/arcanecover.webp";
import cover1 from "../imgs/arcane.jpg.webp";

import CardSlideNewest from "./CardSlideNewest";
import CardSlidePopular from "./CardSlidePopular";
import CardSlideBest from "./CardSlideBest";
import CardTV from "./CardTvs";

function Slider({ movies }) {
  const slice1 = movies.slice(0, 10);
  const slice2 = movies.slice(10, 20);
  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to);
  };


  return (
    <div>
      <CardTV title="All" data={`${slice1}`}  />
    </div>
  );
}

export default Slider;


