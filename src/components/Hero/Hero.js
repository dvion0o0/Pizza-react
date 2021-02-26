import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { HeroContainer, HeroContent } from "./HeroStyles";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log("hekki");
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <HeroContent>
        <h1>Greatest pizza ever</h1>
        <p>ready in 60 seconds</p>
        <button>place order</button>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
