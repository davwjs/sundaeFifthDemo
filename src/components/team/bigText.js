import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Animations } from "./animations";

const BigTextStyles = styled.div`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  margin-bottom: 10vh;
  .container {
    overflow: hidden;
    width: 100%;
    :nth-child(1) {
      padding-left: 45vw;
    }
    :nth-child(2) {
      text-align: center;
    }
    :nth-child(3) {
      padding-left: 5vw;
    }
    h1 {
      text-transform: uppercase;
      font-size: calc(var(--VW) * 5.5);
      line-height: 10vw;
      height: 10vw;
      overflow: hidden;
    }
  }
`;

const BigText = () => {
  const { transition, textReveal } = Animations();
  return (
    <BigTextStyles data-scroll-section className="big-text">
      <div className="container">
        <motion.h1
          variants={textReveal}
          initial="initial"
          animate="animate"
          transition={{ ...transition, delay: 3 }}
        >
          Minimum
        </motion.h1>
      </div>
      <div className="container">
        <motion.h1
          variants={textReveal}
          initial="initial"
          animate="animate"
          transition={{ ...transition, delay: 3.2 }}
        >
          GPA required
        </motion.h1>
      </div>
      <div className="container">
        <motion.h1
          variants={textReveal}
          initial="initial"
          animate="animate"
          transition={{ ...transition, delay: 3.4 }}
        >
          for matriculation
        </motion.h1>
      </div>
      <div className="container">
        <motion.h1
          variants={textReveal}
          initial="initial"
          animate="animate"
          transition={{ ...transition, delay: 3.6 }}
        >
          is 4.20
        </motion.h1>
      </div>
    </BigTextStyles>
  );
};

export { BigText };
