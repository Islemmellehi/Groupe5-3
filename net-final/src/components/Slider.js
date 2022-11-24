import React from "react";
import CardSlider from "./CardSlider";
import cover from "../imgs/arcanecover.webp";
import cover1 from "../imgs/arcane.jpg.webp";

import CardSlideNewest from "./CardSlideNewest";
import CardSlidePopular from "./CardSlidePopular";
import CardSlideBest from "./CardSlideBest";

function Slider({ movies }) {
  const slice1 = movies.slice(0, 10);
  const slice2 = movies.slice(10, 20);
  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to);
  };


  return (
    <div>
      <CardSlider title="Trending" data={`${slice1}`}  />
      <CardSlideNewest title="New Release" data={`${slice2}`}  />
      <CardSlidePopular title="Popular" data={getMoviesFromRange(20, 30)} coversArray={`${[cover, cover, cover, cover, cover, cover, cover, cover]}`}  />
      <CardSlideBest title="Best Voted" data={getMoviesFromRange(30, 40)} coversArray={`${[cover1, cover1, cover1, cover1, cover1, cover1, cover1, cover1]}`} />
    </div>
  );
}

export default Slider;


