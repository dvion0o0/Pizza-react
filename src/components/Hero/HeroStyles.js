import styled from "styled-components";
import HeroImg from "../../images/pizza-3.jpg";
export const HeroContainer = styled.header`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${HeroImg});
  background-position: center;
  background-size: cover;
  min-height: 100vh;
`;

export const HeroContent = styled.div`
  position: absolute;
  top: 40%;
  padding: 0 2rem;
  color: #fff;

  h1 {
    font-size: 3rem;
    line-height: 1.2;
    text-transform: uppercase;
    border-bottom: 3px solid yellow;
    border-right: 1px solid yellow;
    padding: 0 2rem 0 0;
    margin-bottom: 0.2rem;
    font-weight: 700;

    @media screen and (min-width: 768px) {
      width: 25rem;
      font-size: 4rem;
    }
  }
  p {
    font-size: 1.8rem;
    line-height: 1;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 1.2rem;

    @media screen and (min-width: 768px) {
      font-size: 2rem;
    }
  }

  @media screen and (min-width: 768px) {
    padding-left: 8rem;
  }

  button {
    padding: 1rem 2.7rem;
    text-transform: capitalize;
    font-size: 1rem;
    font-weight: bold;
    background: red;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: 0.3s linear;

    &:hover {
      color: #000;
      background: #ffc500;
    }
  }
`;
