import Link from "next/link";
import React, { useEffect, useState } from "react";

import { IconButton } from "@material-ui/core";
import { AddShoppingCart, FavoriteBorder, Favorite } from "@material-ui/icons";

import { useCart } from "~/contexts/product";
import type { ProductProps } from "~/contexts/product";

import {
  ProductContainer,
  Title,
  Description,
  TextContainer,
  CardActions,
  Price,
  Icons
} from "./styles";

const ProductCard = ({ ...propProduct }: ProductProps) => {
  const { cart, favorite, setCart, setFavorite } = useCart();

  function handleFavoriteItem(id: number) {
    const filterArray =  favorite.filter((product) => product.id !== id)

    setFavorite([...filterArray, propProduct])
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
          <Icons>
            <IconButton>
              <FavoriteBorder onClick={() => handleFavoriteItem(propProduct.id)}/>
            </IconButton>
            <IconButton aria-label="Add to Cart">
              <AddShoppingCart 
                onClick={() => setCart([...cart, propProduct])}
              />
            </IconButton>
          </Icons>
        </CardActions>
      </ProductContainer>
    </>
  );
};

export default ProductCard;
