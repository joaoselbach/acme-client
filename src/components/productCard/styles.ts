import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-color: #c3c3c3;
  overflow: hidden;
  -webkit-box-shadow: 3px 3px 6px 1px rgba(0, 0, 0, 0.49);
  box-shadow: 3px 3px 6px 1px rgba(0, 0, 0, 0.49);
  transition: 0.4s;

  :hover {
    transform: scale(1.04);
    -webkit-box-shadow: 6px 6px 14px 9px rgba(0, 0, 0, 0.42);
    box-shadow: 6px 6px 14px 9px rgba(0, 0, 0, 0.42);
  }

  img {
    height: 300px;
    width: 360px;
    cursor: pointer;

    :hover {
      filter: blur(50);
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.div``;

export const Title = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

export const Description = styled.span`
  font-size: 14px;
`;

export const Price = styled.span`
  font-size: 16px;
  margin-top: 10px;
`;

export const CardActions = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 15px;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
`;
