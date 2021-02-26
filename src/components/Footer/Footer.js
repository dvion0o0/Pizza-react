import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLogo,
  SocialIcons,
} from "./FooterStyles";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLogo to="/">Pizza</FooterLogo>
        <SocialIcons>
          <a href="/" target="_blank" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="/" target="_blank" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="/" target="_blank" aria-label="Youtube">
            <FaYoutube />
          </a>
          <a href="/" target="_blank" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="/" target="_blank" aria-label="Linkedin">
            <FaLinkedin />
          </a>
        </SocialIcons>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
