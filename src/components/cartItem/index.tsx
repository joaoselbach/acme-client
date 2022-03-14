import Link from "next/link";
import React from "react";

import { Card, CardMedia, Typography, IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

import { useCart } from "~/contexts/product";
import type { Product } from "~/contexts/product";

import {
  Container,
  ProductContainer,
  Title,
  Description,
  TextContainer,
  CardActions,
  Price,
} from "~/styles/styles";

const CartItem = ({ ...propProduct }: Product) => {
  const { cart, setCart } = useCart();

  function handleRemoveitem(id: number) {
    const filterArray =  cart.filter((product) => product.id !== id)

    setCart(filterArray);
  }

  return (
    <>
      <ProductContainer>
        <Link href={`product/${propProduct.id}`}>
          <img src={propProduct.image} />
        </Link>
        <CardActions>
          <TextContainer>
            <Title>{propProduct.name}</Title>
            <Description>{propProduct.description}</Description>
            <Price>{propProduct.formatedPrice}</Price>
          </TextContainer>
          <IconButton aria-label="Delete Item">
            <Delete
              onClick={() =>
                handleRemoveitem(propProduct.id)
              }
            />
          </IconButton>
        </CardActions>
      </ProductContainer>
    </>
  );
};

export default CartItem;
