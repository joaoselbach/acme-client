import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

import { Button } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { AddShoppingCart, FavoriteBorder, Favorite } from "@material-ui/icons";

import { useCart } from "~/contexts/product";
import { MainLayout } from "~/layouts/mainLayout";

import type { ProductProps } from "~/contexts/product";

import {
  Container,
  ContentContainer,
  ImageContainer,
  Title,
  Description,
  Price,
  TextsContainer,
  ButtonsContainer,
} from "./styles";

const Product = () => {
  const router = useRouter();
  const { cart, favorite, setCart, setFavorite } = useCart();
  const { products } = useCart();

  const currentProduct = products.find(
    (product) => product.id === Number(router.query.id)
  );

  const handleFavoriteItem = () => {
    const filterArray =  favorite.filter((product) => product.id !== currentProduct?.id)

    setFavorite([...filterArray, currentProduct])
  };

  useEffect(() => {
    if (!router.query.id) {
      router.push("/");
      return;
    }
  }, [router.query.id]);

  return (
    <Container>
      <ContentContainer>
        <ImageContainer>
          <img src={currentProduct?.largeImage} />
        </ImageContainer>
        <TextsContainer>
          <Title>{currentProduct?.name}</Title>
          <Description>{currentProduct?.description}</Description>
          <Price>{currentProduct?.formatedPrice}</Price>
          <ButtonsContainer>
            <Link href={"/cart"}>
              <Button
                size="large"
                type="button"
                variant="contained"
                color="primary"
              >
                Ir para o carrinho
              </Button>
            </Link>
            <IconButton aria-label="Add to Cart">
              <AddShoppingCart 
                onClick={() => setCart([...cart, currentProduct])}
              />
            </IconButton>
            <IconButton>
              <FavoriteBorder onClick={() => handleFavoriteItem()}/>
            </IconButton>
          </ButtonsContainer>
        </TextsContainer>
      </ContentContainer>
    </Container>
  );
};

Product.Layout = MainLayout;

export default Product;
