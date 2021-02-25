import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";
export const Nav = styled.nav`
  display: grid;
  place-items: center;
  grid-template-columns: auto 30px;
  height: 80px;
  background: transparent;
  padding: 0 2rem;
`;
export const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  font-size: 2rem;
  font-weight: 700;
  justify-self: center;
`;
export const NavToggle = styled.div`
  display: flex;
  color: #fff;
  align-items: center;
  cursor: pointer;
  justify-self: end;

  p {
    font-weight: bold;
    margin-right: 8px;
  }
`;
export const Bars = styled(FaPizzaSlice)`
  font-size: 1.3rem;
`;
