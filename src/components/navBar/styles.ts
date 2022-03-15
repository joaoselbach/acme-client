import styled from "styled-components";
import {
  background,
  flexbox,
  layout,
  position,
  space,
  typography,
} from "styled-system";

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  background-color: #000000b8;
  z-index: 10;
  top: 0;
  ${space}
  ${position}

  @media (max-height: 600px) {
    padding-top: 15px;
    padding-bottom: 15px;
    background-color: #5d2cbc;
    z-index: 5;
  }
`;

export const LogoContainer = styled.div`
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  transition: 0.4s;

  :hover {
    transform: scale(1.03);
  }
`;

export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 42px;
  margin-left: 10px;
  cursor: pointer;
  text-decoration: none;
  border: 2px solid #6812b5;
  color: #2e2e2e;
  background-color: #ffffff00;
  border-radius: 20px;
  font-size: 16px;
  transition: 0.4s;
  ${typography}
  ${flexbox}
  ${space}
  ${layout}

    :hover {
    background-color: #6812b5;
    color: #fff;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const NavLottier = styled.div`
  position: fixed;
  top: -220px;
  margin-right: 500px;
  z-index: -1;
  height: 1360px;
  width: 2220px;
  ${flexbox}
`;
