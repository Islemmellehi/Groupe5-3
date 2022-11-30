import React, { useRef, useState } from "react";
import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Card from "./Card";
import cover10 from "../imgs/tv/10first/13rw.jpg";
import cover1 from "../imgs/tv/10first/1899.jpg";
import cover2 from "../imgs/tv/10first/28dayshaunted.jpg";
import cover3 from "../imgs/tv/10first/breakingbad.jpg";
import cover4 from "../imgs/tv/10first/chucky.jpg";
import cover5 from "../imgs/tv/10first/elite.jpg";
import cover6 from "../imgs/tv/10first/euphoria.jpg";
import cover7 from "../imgs/tv/10first/got.jpg";
import cover8 from "../imgs/tv/10first/peaky.jpg";
import cover9 from "../imgs/tv/10first/suits.jpg";

import cover11 from "../imgs/tv/10second/allofus.jpg";
import cover12 from "../imgs/tv/10second/halo.jpg";
import cover13 from "../imgs/tv/10second/house.jpg";
import cover14 from "../imgs/tv/10second/pablo.jpg";
import cover15 from "../imgs/tv/10second/riverdale.jpg";
import cover16 from "../imgs/tv/10second/thedevilshour.jpg";
import cover17 from "../imgs/tv/10second/thegooddoc.jpg";
import cover18 from "../imgs/tv/10second/theperipheral.jpg";
import cover19 from "../imgs/tv/10second/war.jpg";
import cover20 from "../imgs/tv/10second/wednesday.jpg";

import cover21 from "../imgs/tv/10third/100.jpg";
import cover22 from "../imgs/tv/10third/1ryCwZaZFAlG0c1w8XiMHeAxxYy.jpg";
import cover23 from "../imgs/tv/10third/ccej6D8J81DDJWqhP7OG6PA6xcl.jpg";
import cover24 from "../imgs/tv/10third/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg";
import cover25 from "../imgs/tv/10third/fu5vEUHgxkAPmX26ISQXqHmlPMq.jpg";
import cover26 from "../imgs/tv/10third/h2XVccFQMQSBb6ZhyXOHMtAwrMP.jpg";
import cover27 from "../imgs/tv/10third/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg";
import cover28 from "../imgs/tv/10third/sIdCKlmM2nU4akIvFQaAIiU8YES.jpg";
import cover29 from "../imgs/tv/10third/weak.jpg";
import cover30 from "../imgs/tv/10third/YksR65as1ppF2N48TJAh2PLamX.jpg";

import cover31 from "../imgs/tv/10last/2IkYQJlT26yXef2iot7dhRtavSC.jpg";
import cover32 from "../imgs/tv/10last/2uuVIAb4MtPmMNTpOyID5V8DzrU.jpg";
import cover33 from "../imgs/tv/10last/6stEKYqgLBhSieTRnnZ5ShE5ZPS.jpg";
import cover34 from "../imgs/tv/10last/7yQyDCqSazrYTnmxdQLAZ8YDH87.jpg";
import cover35 from "../imgs/tv/10last/bfxwMdQyJc0CL24m5VjtWAN30mt.jpg";
import cover36 from "../imgs/tv/10last/gKG5QGz5Ngf8fgWpBsWtlg5L2SF.jpg";
import cover37 from "../imgs/tv/10last/hzeirSF6bRjssDh5JFrm5WRwFLd.jpg";
import cover38 from "../imgs/tv/10last/ioywelRYOfNJ5w8aNQ5ttJo9dk1.jpg";
import cover39 from "../imgs/tv/10last/vY2vfAskJTiWsQSv6bdbNCQhPLm.jpg";
import cover40 from "../imgs/tv/10last/zsaiq8ZclPuneuN7loLEbsh1ANJ.jpg";

function CardTvs({ data, title }) {
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
      <h1 >{title}</h1>
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
export default CardTvs;
