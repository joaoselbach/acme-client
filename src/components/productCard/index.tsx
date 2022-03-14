import Link from "next/link";
import React from "react";

import { Card, CardMedia, Typography, IconButton } from "@material-ui/core";
import { AddShoppingCart, FavoriteBorder } from "@material-ui/icons";

import { useCart } from "~/contexts/product";
import type { Product } from "~/contexts/product";

import {
  ProductContainer,
  Title,
  Description,
  TextContainer,
  CardActions,
  Price,
  Icons
} from "./styles";

const ProductCard = ({ ...propProduct }: Product) => {
  const { cart, favorite, setCart, setFavorite } = useCart();

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
          <Icons>
            <IconButton aria-label="Add to Cart">
              <AddShoppingCart
                onClick={() => setCart([...cart, propProduct])}
              />
            </IconButton>
            <IconButton>
              <FavoriteBorder 
                onClick={() => setFavorite([...favorite, propProduct])}
              />
            </IconButton>
          </Icons>
        </CardActions>
      </ProductContainer>
    </>
  );
};

export default ProductCard;
