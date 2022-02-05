import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import hoverEffect from "hover-effect";
import mainImage from "../../assets/images/homepage/mainImage.jpg";
import mainImage2 from "../../assets/images/homepage/mainImage2.jpg";
import HeatMap from "../../assets/images/homepage/heightMap.webp";

const MainSectionStyles = styled.div`
  margin: 20vh 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (hover: none) and (pointer: coarse), (max-width: 500px) {
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-bottom: 10vh;
  }
  .main-pic {
    width: 25vw;
    height: 30vw;
    margin-right: 5vw;
    text-align: center;
    overflow: hidden;
    @media (hover: none) and (pointer: coarse), (max-width: 500px) {
      width: 100%;
      width: 50vw;
      height: 55vw;
    }
  }
  .main-text {
    width: 45%;
    @media (hover: none) and (pointer: coarse), (max-width: 500px) {
      width: 95%;
    }
    p {
      margin: 3vw 0;
      mix-blend-mode: normal;
      @media (hover: none) and (pointer: coarse), (max-width: 500px) {
        margin: 5vw 0;
      }
      a {
        font-family: Grotesk;
        text-transform: none;
        mix-blend-mode: normal;
      }
    }
  }
`;

const MainSection = () => {
  const profileRef = useRef(null);
  useEffect(() => {
    new hoverEffect({
      parent: profileRef.current,
      intensity: 1.4,
      image1: mainImage2,
      image2: mainImage,
      displacementImage: HeatMap,
    });
  });
  return (
    <MainSectionStyles data-scroll-section className="main">
      <div
        data-scroll
        data-scroll-speed="6"
        className="main-pic"
        ref={profileRef}
      ></div>
      <div className="main-text">
        <p>
          <a href="https://sundae.school/" target="_blank" rel="noreferrer">
            Sundae School
          </a>{" "}
          is a craft cann@bi$ brand and a smoke₩ear label born in Seoul and
          raised in California. We imagine an alternate green, hazy universe
          where God in her highest inhales and exhales to create the world. Our
          mission is to globalize [redacted] by serving great, reliable highs
          and illustrating narratives that contextualize and de-stigmatize the
          plant.
        </p>
        <p>
          We are a team of product-oriented, mission-driven creatives and
          midnight tokers. As a team comprised of immigrants, LGBTQIA+, and
          people of color, we are committed to building an industry and
          community that reflects everyone, not just the lucky few. In line with
          our commitment to diversity and equity, we donate 1% of our sales
          through Beam, and work specifically with minority owned businesses -
          from equity-owned flower businesses in California to garment factories
          hiring the single-parents in Seoul. We make it a priority to partner
          with people and brands who reflect our ideals.
        </p>
        <p>
          Sundae School is not just a team of creatives and an array of
          products. Our community of honor rollers around the world are the true
          inspiration behind the brand. Join us on our discord channel or just
          dm us on our instagram for any questions regarding enrollment. Please
          check the 10 commandments of Sundae School prior to joining to learn
          more about our values.
        </p>
      </div>
    </MainSectionStyles>
  );
};

export { MainSection };
