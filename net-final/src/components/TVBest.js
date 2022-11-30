import React, { useRef, useState } from "react";
import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Card from "./Card";
import cover10 from "../imgs/Nouveau dossier (2)/fightclub.jpg";
import cover1 from "../imgs/Nouveau dossier (2)/fivefeetapart.jpg";
import cover2 from "../imgs/Nouveau dossier (2)/godfather.jpg";
import cover3 from "../imgs/Nouveau dossier (2)/howlsmovingcastle.jpg";
import cover4 from "../imgs/Nouveau dossier (2)/inception.jpg";
import cover5 from "../imgs/Nouveau dossier (2)/interstellar.jpg";
import cover6 from "../imgs/Nouveau dossier (2)/spiritedaway.jpg";
import cover7 from "../imgs/Nouveau dossier (2)/thegoodthebadndtheugly.jpg";
import cover8 from "../imgs/Nouveau dossier (2)/thesilence.jpg";
import cover9 from "../imgs/Nouveau dossier (2)/yourname.jpg";
import TvPop from "./TvPop";

function TvBest({ data, title}) {
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


  var best = [cover1, cover2, cover3, cover4, cover5, cover6, cover7, cover8, cover9,cover10];

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
          {best.map(function changingCover(cover) {
            return <Card coverpic={`${cover}`} />
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

export default TvPop;
