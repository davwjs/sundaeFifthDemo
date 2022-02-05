import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const NavStyles = styled.div`
  .logo,
  .works,
  .team {
    position: fixed;
    z-index: 20;
  }

  .logo {
    top: 2vw;
    left: 2vw;
    width: 3.2vw;
    height: 3.2vw;
    mix-blend-mode: normal;
    @media (hover: none) and (pointer: coarse), (max-width: 500px) {
      width: 7vw;
      height: 7vw;
    }
    img {
      width: 100%;
      height: 100%;
      pointer-events: none;
      color: var(--black);
    }
  }

  .works,
  .team {
    transition: 0.3s all ease;
    transform: rotate(90deg);
    transform-origin: 0% 0%;
    right: -3vw;
    font-size: calc(var(--VW) * 1.2);
    @media (hover: none) and (pointer: coarse), (max-width: 500px) {
      font-size: calc(var(--VW) * 3);
      right: -12vw;
    }
    :hover {
      -webkit-text-stroke: 0.1vw var(--black);
    }
  }

  .works {
    top: 2.2vw;
  }

  .team {
    bottom: 6.5vw;
    @media (hover: none) and (pointer: coarse), (max-width: 500px) {
      bottom: 13.5vw;
    }
  }
`;

const About_Nav = () => {
  return (
    <NavStyles>
      <Link className="logo nav-button" to="/">
        <img width="100" height="87" src={logo}></img>
      </Link>
      <Link className="works nav-button" to="/works">
        Works
      </Link>
      <Link className="team nav-button" to="/team">
        Team
      </Link>
    </NavStyles>
  );
};

export { About_Nav };
