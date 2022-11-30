import React, { useRef, useState } from "react";
import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Card from "./Card";
import cover10 from "../imgs/popular/allquiet.jpg";
import cover1 from "../imgs/popular/avatar.jpg";
import cover2 from "../imgs/popular/blackphone.jpg";
import cover3 from "../imgs/popular/chalk.jpg";
import cover4 from "../imgs/popular/demonslayer.jpg";
import cover5 from "../imgs/popular/dive.jpg";
import cover6 from "../imgs/popular/jeepers creeper.jpg";
import cover7 from "../imgs/popular/thefriendship.jpg";
import cover8 from "../imgs/popular/lionking.jpg";
import cover9 from "../imgs/popular/thefriendship.jpg";

import cover11 from "../imgs/Nouveau dossier/agoodperson.jpg";
import cover12 from "../imgs/Nouveau dossier/empireoflight.jpg";
import cover13 from "../imgs/Nouveau dossier/7days.jpg";
import cover14 from "../imgs/Nouveau dossier/fatherstu.jpg";
import cover15 from "../imgs/Nouveau dossier/hacker.jpg";
import cover16 from "../imgs/Nouveau dossier/onepiece.jpg";
import cover17 from "../imgs/Nouveau dossier/puss.jpg";
import cover18 from "../imgs/Nouveau dossier/seeusoon.jpg";
import cover19 from "../imgs/Nouveau dossier/theteacher.jpg";
import cover20 from "../imgs/Nouveau dossier/empireoflight.jpg";

import cover21 from "../imgs/Nouveau dossier (2)/fightclub.jpg";
import cover22 from "../imgs/Nouveau dossier (2)/fivefeetapart.jpg";
import cover23 from "../imgs/Nouveau dossier (2)/godfather.jpg";
import cover24 from "../imgs/Nouveau dossier (2)/interstellar.jpg";
import cover25 from "../imgs/Nouveau dossier (2)/spiritedaway.jpg";
import cover26 from "../imgs/Nouveau dossier (2)/thegoodthebadndtheugly.jpg";
import cover27 from "../imgs/Nouveau dossier (2)/yourname.jpg";
import cover28 from "../imgs/Nouveau dossier (2)/thesilence.jpg";
import cover29 from "../imgs/Nouveau dossier (2)/howlsmovingcastle.jpg";
import cover30 from "../imgs/Nouveau dossier (2)/thesilence.jpg";

import cover31 from "../imgs/newest/covers/enola holmes.jpg";
import cover32 from "../imgs/newest/covers/athena.jpg";
import cover33 from "../imgs/newest/covers/Dahmer – Monster The Jeffrey Dahmer Story (Netflix).webp";
import cover34 from "../imgs/newest/covers/gooddoc.jpg";
import cover35 from "../imgs/newest/covers/spyfam.jprg.webp";
import cover36 from "../imgs/newest/covers/lord of the rings.jpg";
import cover37 from "../imgs/newest/covers/strangerthings.jpg";
import cover38 from "../imgs/newest/covers/cabinet.jpg";
import cover39 from "../imgs/newest/covers/3r4LYFuXrg3G8fepysr4xSLWnQL.jpg";
import cover40 from "../imgs/newest/covers/lucy.jpg";

function CardMovies({ data, title }) {
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

  var best = [
    cover1,
    cover2,
    cover3,
    cover4,
    cover5,
    cover6,
    
  ];

  var covers2 = [
    cover11,
    cover12,
    cover13,
    cover14,
    cover15,
    cover16,
    
  ];
  var covers3 = [
    cover21,
    cover22,
    cover23,
    cover24,
    cover25,
    cover26,

  ];
  var covers4 = [
    cover31,
    cover32,
    cover33,
    cover34,
    cover35,
    cover36,
    
  ];

  return (
    <Container
      className="flex column"
      showControls={showControls}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      
    >
      <h1>{title}</h1>
      <br/>
      <div className="wrapper" >
        <div
          className={`slider-action left ${
            !showControls ? "none" : ""
          } flex j-center a-center`}
        >
        </div>
        <div className="slider flex" ref={listRef}>
          {best.map(function changingCover(cover) {
            return <Card coverpic={`${cover}`} />;
          })}

        </div>
        <br />
        <div className="slider flex" ref={listRef}>
          {covers2.map(function changingCover(cover) {
            return <Card coverpic={`${cover}`} />;
          })}
        </div>
        <br />
        <div className="slider flex" ref={listRef}>
          {covers3.map(function changingCover(cover) {
            return <Card coverpic={`${cover}`} />;
          })}
        </div>
        <br />
        <div className="slider flex" ref={listRef}>
          {covers4.map(function changingCover(cover) {
            return <Card coverpic={`${cover}`} />;
          })}
        </div>
        <br />
        <div
          className={`slider-action right ${
            !showControls ? "none" : ""
          } flex j-center a-center`}
        >
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
    margin-left: 90px;
    font-size:60px;
  }
  .wrapper {
    .slider {
      width: max-content;
      gap: 1rem;
      transform: translateX(0px);
      transition: 0.3s ease-in-out;
      margin-left: 90px;
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

export default CardMovies;
