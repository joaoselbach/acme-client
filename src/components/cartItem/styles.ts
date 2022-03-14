import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-color: #00000042;
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
