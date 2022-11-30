import React, { useRef, useState } from "react";
import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Card from "./Card";
import cover1 from "../imgs/Nouveau dossier/7days.jpg";
import cover2 from "../imgs/Nouveau dossier/agoodperson.jpg";
import cover3 from "../imgs/Nouveau dossier/empireoflight.jpg";
import cover4 from "../imgs/Nouveau dossier/fatherstu.jpg";
import cover5 from "../imgs/Nouveau dossier/hacker.jpg";
import cover6 from "../imgs/Nouveau dossier/hatching.jpg";
import cover7 from "../imgs/Nouveau dossier/mermaid.jpg";
import cover8 from "../imgs/Nouveau dossier/puss.jpg";
import cover9 from "../imgs/Nouveau dossier/theteacher.jpg";
import cover10 from "../imgs/Nouveau dossier/onepiece.jpg";

import t1 from "../imgs/trailers/Days  Official Trailer.mp4";
import t2 from "../imgs/trailers/Days  Official Trailer.mp4";
import t3 from "../imgs/trailers/EMPIRE OF LIGHT _ Official Teaser Trailer _ Searchlight Pictures.mp4";
import t4 from "../imgs/trailers/Father Stu - Official Trailer - Exclusively At Cinemas Now.mp4";
import t5 from "../imgs/trailers/Hacker Trailer 2017  Callan McAuliffe  20 Januari 2017.mp4";
import t6 from "../imgs/trailers/HATCHING Trailer (2022).mp4";
import t7 from "../imgs/trailers/The Little Mermaid - Official Teaser Trailer.mp4";
import t8 from "../imgs/trailers/Puss In Boots The Last Wish - Official Trailer (2022) Antonio Banderas, Salma Hayek.mp4";
import t9 from "../imgs/trailers/The Teacher - Official Trailer  Amala Paul, Hakkim, Chemban Vinod  Vivek  Dawn Vincent.mp4";
import t10 from "../imgs/trailers/The Little Mermaid - Official Teaser Trailer.mp4";

function CardSlider({ data, title }) {
  const listRef = useRef();
  const [sliderPosition, setSliderPosition] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const handleDirection = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 70;
    if (direction === "left" && sliderPosition > 0) {
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
      setSliderPosition(sliderPosition - 1);
    }
    if (direction === "right" && sliderPosition < 4) {
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      setSliderPosition(sliderPosition + 1);
    }
  };

  var trending = [
    cover1,
    cover2,
    cover3,
    cover4,
    cover5,
    cover6,
    cover7,
    cover8,
    cover9,
    cover10,
  ];
  var trailers = [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10];

  return (
    <Container
      className="flex column"
      showControls={showControls}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <h1>{title}</h1>
      <div className="wrapper">
        <div
          className={`slider-action left ${
            !showControls ? "none" : ""
          } flex j-center a-center`}
        >
          <AiOutlineLeft onClick={() => handleDirection("left")} />
        </div>
        <div className="slider flex" ref={listRef}>
          {trending.map(function changingCover(cover) {
            var content= trailers.map (item => content=item)
            return <Card coverpic={`${cover}`} trailervid={`${content}`}/>;
          })}

        </div>
        <div
          className={`slider-action right ${
            !showControls ? "none" : ""
          } flex j-center a-center`}
        >
          <AiOutlineRight onClick={() => handleDirection("right")} />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  gap: 1rem;
  position: relative;
  padding: 2rem 0;
  h1 {
    margin-left: 50px;
  }
  .wrapper {
    .slider {
      width: max-content;
      gap: 1rem;
      transform: translateX(0px);
      transition: 0.3s ease-in-out;
      margin-left: 50px;
    }
    .slider-action {
      position: absolute;
      z-index: 99;
      height: 100%;
      top: 0;
      bottom: 0;
      width: 50px;
      transition: 0.3s ease-in-out;
      svg {
        font-size: 2rem;
      }
    }
    .none {
      display: none;
    }
    .left {
      left: 0;
    }
    .right {
      right: 0;
    }
  }
`;

export default CardSlider;
