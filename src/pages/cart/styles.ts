import styled from "styled-components";

import { background, layout } from "styled-system";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;  
  padding: 0px 50px;
  gap: 20px;
  margin-top: 100px;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  ${background}
  ${layout}
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-color: #c3c3c3;
  overflow: hidden;

  img {
    height: 300px;
    width: 360px;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Image = styled.div``

export const Title = styled.span` 
  font-size: 14px;
  font-weight: bold;
`

export const Description = styled.span`
  font-size: 14px;
  
`

export const Price = styled.span`
  font-size: 16px;
  margin-top: 10px;
`

export const CardActions = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 15px;
`

export const Subtotal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Buttons = styled.div`
  display: flex;
  gap: 20px;

  button {
    width: 160px;
  }
`
