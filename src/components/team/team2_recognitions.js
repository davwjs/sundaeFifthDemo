import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useMousePosition } from "../../hooks/useMousePosition";
import { AwardsInfo } from "../../data/awardsInfo";

const MarqueeStyles = styled.div`
  position: relative;
  left: -10vw;
  .left,
  .right {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    span {
      position: relative;
      display: inline-block;
      font-family: Monument;
      font-weight: 100;
      font-size: calc(var(--VW) * 8);
      text-transform: uppercase;
      padding-right: 2vw;
    }
  }
  .left {
    span {
      border-top: 0.5vw solid var(--black);
      border-bottom: 0.5vw solid var(--black);
    }
  }
  .right {
    span {
      border-top: 0.5vw solid var(--black);
      border-bottom: 0.5vw solid var(--black);
    }
  }
`;

const DetailsStyles = styled.div`
  position: relative;
  margin: 10vh 0 20vh 0;
  width: 100%;
  padding-right: 5vw;
  display: flex;
  justify-content: flex-end;
  @media (hover: none) and (pointer: coarse), (max-width: 500px) {
    margin-bottom: 10vh;
  }
  .container {
    width: 50%;
    display: flex;
    justify-content: space-between;
    @media (hover: none) and (pointer: coarse), (max-width: 500px) {
      width: 100%;
    }
    p {
      margin: 1vw 0;
      padding: 1vw 0;
      font-size: calc(var(--VW) * 2);
      @media (hover: none) and (pointer: coarse), (max-width: 500px) {
        font-size: calc(var(--VW) * 4.5);
      }
    }
  }
  .certificate {
    @media (hover: none) and (pointer: coarse), (max-width: 500px) {
      display: none;
    }
    pointer-events: none;
    position: absolute;
    height: 50vh;
    z-index: 0;
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.1);
    img {
      height: 100%;
      width: auto;
      display: block;
    }
  }
`;

const Team2_Recognitions = () => {
  const travelDistance = 85.7;
  const { x, y } = useMousePosition();
  const [hovered, setHovered] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const hoverAward = (imageURL) => {
    setHovered(true);
    setCurrentImage(imageURL);
  };
  const unHoverAward = () => {
    setHovered(false);
    setCurrentImage("");
  };
  return (
    <>
      <MarqueeStyles data-scroll-section>
        <div className="right">
          <motion.span
            initial={{ right: `${travelDistance}%` }}
            animate={{ right: 0 }}
            transition={{ ease: "linear", duration: 5, repeat: Infinity }}
          >
            Team2
          </motion.span>
          <motion.span
            initial={{ right: `${travelDistance}%` }}
            animate={{ right: 0 }}
            transition={{ ease: "linear", duration: 5, repeat: Infinity }}
          >
            Team2
          </motion.span>
          <motion.span
            initial={{ right: `${travelDistance}%` }}
            animate={{ right: 0 }}
            transition={{ ease: "linear", duration: 5, repeat: Infinity }}
          >
            Team2
          </motion.span>
          <motion.span
            initial={{ right: `${travelDistance}%` }}
            animate={{ right: 0 }}
            transition={{ ease: "linear", duration: 5, repeat: Infinity }}
          >
            Team2
          </motion.span>
        </div>
      </MarqueeStyles>
    </>
  );
};

export { Team2_Recognitions };
