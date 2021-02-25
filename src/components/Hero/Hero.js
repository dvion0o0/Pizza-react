import React from "react";
import Navbar from "../Navbar/Navbar";
import { HeroContainer, HeroContent } from "./HeroStyles";

const Hero = () => {
  return (
    <HeroContainer>
      <Navbar />
      <HeroContent>
        <h1>Greatest pizza ever</h1>
        <p>ready in 60 seconds</p>
        <button>place order</button>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
