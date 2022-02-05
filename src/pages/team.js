import React from "react";
import styled from "styled-components";
import { Team_Nav } from "../components/team_nav";
import { useScroll } from "../hooks/useScroll";
import { motion } from "framer-motion";
import { Panels } from "../components/panels";
import { BigText } from "../components/team/bigText";
import { Team1_MainSection } from "../components/team/team1_mainSection";
import { Team2_MainSection } from "../components/team/team2_mainSection";
import { Team1_Recognitions } from "../components/team/team1_recognitions";
import { Team2_Recognitions } from "../components/team/team2_recognitions";

const TeamStyle = styled(motion.div)`
  padding: 0 6vw;
  padding-bottom: 6vw;
  .hello {
    h1 {
      font-size: calc(var(--VW) * 3);
      text-align: center;
      @media (hover: none) and (pointer: coarse), (max-width: 500px) {
        font-size: calc(var(--VW) * 6);
      }
    }
  }
  .name {
    margin: 10vh 0 20vh 0;
    h1 {
      font-size: calc(var(--VW) * 16);
      line-height: 10vw;
      height: 10vw;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke: 0.1vw var(--black);
      text-transform: uppercase;
      :nth-child(3) {
        text-align: right;
      }
    }
    h3 {
      font-size: calc(var(--VW) * 3);
      text-align: center;
      z-index: 5;
      @media (hover: none) and (pointer: coarse), (max-width: 500px) {
        font-size: calc(var(--VW) * 6);
      }
    }
  }
  .split {
    margin: 5vh 0;
    h1 {
      text-transform: uppercase;
      font-size: calc(var(--VW) * 3);
      @media (hover: none) and (pointer: coarse), (max-width: 500px) {
        font-size: calc(var(--VW) * 5);
      }
    }
  }
  .contact {
    text-align: right;
    h1 {
      font-size: calc(var(--VW) * 6);
      text-transform: uppercase;
    }
    a {
      font-size: calc(var(--VW) * 10);
      text-transform: uppercase;
      -webkit-text-fill-color: var(--burlywood);
      -webkit-text-stroke: 0.14vw var(--black);
      &:hover {
        -webkit-text-fill-color: var(--black);
        -webkit-text-stroke: 0.14vw var(--burlywood);
      }
    }
  }
`;

const Team = () => {
  const { scrollRef } = useScroll();
  return (
    <>
      <Team_Nav />
      <Panels />
      <TeamStyle
        initial={{ backgroundColor: "#0f0e0e", pointerEvents: "none" }}
        animate={{ backgroundColor: "transparent", pointerEvents: "unset" }}
        exit={{
          opacity: [1, 1, 0],
          transition: { duration: 2, times: [0, 0.99, 1] },
        }}
        ref={scrollRef}
        data-scroll-container
      >
        <BigText />
        <div data-scroll-section className="hello">
          <h1
            data-scroll
            data-scroll-speed="-8"
            data-scroll-direction="vertical"
          >
            Meet the
          </h1>
        </div>
        <div data-scroll-section className="name">
          <h1 data-scroll data-scroll-speed="0.5">
            Sundae.
          </h1>
          <h3 data-scroll data-scroll-speed="6">
            Team
          </h3>
          <h1 data-scroll data-scroll-speed="0.5">
            School
          </h1>
        </div>{" "}
        <Team1_Recognitions />
        <Team1_MainSection />
        <Team2_Recognitions />
        <Team2_MainSection />
      </TeamStyle>
    </>
  );
};

export { Team };
