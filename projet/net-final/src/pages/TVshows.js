import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import SliderTV from "../components/SliderTV";
import styled from "styled-components";
import {  useSelector } from "react-redux";

function Movies() {
  const movies = useSelector((state) => state.netflix.movies);

  return (
    <Container>
      <Navbar />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <div className="slider-part">
        <SliderTV movies={`${movies}`} />
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  .hero {
    position: relative;
    .background-image {
      filter: brightness(60%);
    }
    img {
      height: 100vh;
      width: 100vw;
    }

    .container {
      position: absolute;
      bottom: 5rem;
      .logo {
        img {
          width: 100%;
          height: 100%;
          margin-left: 5rem;
        }
      }
      .buttons {
        margin: 5rem;
        gap: 2rem;
        button {
          font-size: 1.4rem;
          gap: 1rem;
          border-radius: 0.2rem;
          padding: 0.5rem;
          padding-left: 2rem;
          padding-right: 2.4rem;
          border: none;
          cursor: pointer;
          transition: 0.2s ease-in-out;
          &:hover {
            opacity: 0.8;
          }
          &:nth-of-type(2) {
            background-color: rgba(109, 109, 110, 0.7);
            color: white;
            svg {
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }
`;

export default Movies;
