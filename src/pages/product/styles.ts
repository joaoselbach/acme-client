import styled from "styled-components";
import { background, layout } from "styled-system";

export const MainBanner = styled.div`
  padding-top: 100px;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh+100px);
  background-size: cover;
  background-repeat: no-repeat;
  ${background}
  ${layout}
`;