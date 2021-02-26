import styled from "styled-components";

export const ProductContainer = styled.div`
  background: #150f0f;
  color: #fff;
  padding: 4rem 0;

  h1 {
    text-align: center;
    margin-bottom: 4rem;
  }
`;

export const ProductCards = styled.div`
  display: grid;
  place-items: center;
  width: 80vw;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;
  }
`;

export const ProductCard = styled.article`
  margin-bottom: 3rem;
  display: grid;

  img {
    height: 300px;
    width: 100%;
    box-shadow: 8px 8px #fdc500;
  }
`;

export const ProductInfo = styled.div`
  margin: 2rem 0 2rem 0;
  text-align: center;

  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.8;
    margin-bottom: 1rem;
  }

  h1 {
    margin-bottom: 0;
    font-size: 2rem;
  }
`;

export const ProductButton = styled.button`
  padding: 1rem 4rem;
  font-size: 1rem;
  font-weight: 700;
  background: #e31837;
  border: none;
  color: #fff;
  transition: 0.4s all ease-out;
  cursor: pointer;

  &:hover {
    background: #ffc500;
    color: #000;
  }
`;
