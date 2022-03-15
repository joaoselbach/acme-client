import styled from "styled-components";
import { background, layout } from "styled-system";

export const Container = styled.div`
  padding-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  ${background}
  ${layout}
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 180px;
  width: 100%;

  img {
    border-radius: 10px;
  }
`

export const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 50px;
  gap: 5px;
`

export const ImageContainer = styled.div``


export const Title = styled.span`
  font-size: 36px;
  font-weight: bold;
  color: #2e2e2e;
`

export const Description = styled.span`
  font-size: 22px;
  color: #2e2e2eb3;
`

export const Price = styled.span`
  margin-top: 30px;
  font-size: 22px;
  font-weight: bold;
  color: #2e2e2e;
`