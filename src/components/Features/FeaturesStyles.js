import styled from "styled-components";
import FeaturePic from "../../images/featured3.jpg";
export const FeatureContainer = styled.section`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${FeaturePic});
  height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 0 1rem;
  text-align: center;

  h1 {
    font-size: 3rem;
  }

  p {
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
`;

export const FeatureButton = styled.button`
  padding: 1rem 3rem;
  background: #ffc500;
  color: #000;
  border: none;
  transition: 0.4s all ease-out;
  cursor: pointer;
  font-size: 1.3rem;

  &:hover {
    color: #fff;
    background: #e31837;
  }
`;
