import styled from "styled-components";
import { Link } from "react-router-dom";
export const FooterContainer = styled.footer`
  background: #0d0909;
`;

export const FooterWrap = styled.div`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const FooterLogo = styled(Link)`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const SocialIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  font-size: 2rem;

  a {
    color: #fff;
    cursor: pointer;
    transition: 0.4s all ease-out;

    &:hover {
      color: #e31837;
    }
  }
`;
