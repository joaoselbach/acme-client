import React, { useState } from "react";

import ProductCard from "~/components/productCard";
import Grid from "@material-ui/core/Grid";

import { useCart } from "~/contexts/product";
import { MainLayout } from "~/layouts/mainLayout";

import {
  Container,
  FavoriteButton,
  Filter,
  ProductButton,
} from "~/styles/styles";

const Home = () => {
  const { products, favorite } = useCart();
  const [favoriteButton, setFavoriteButton] = useState("products");

  console.log(favoriteButton);

  if (favoriteButton === "favorites") {
    return (
      <Container>
        <Filter>
          <FavoriteButton 
          onClick={() => setFavoriteButton("favorites")}
          id={favoriteButton === "favorites" ? "activeButton" : ""}
          >
            Favoritos
          </FavoriteButton>
          <ProductButton 
          onClick={() => setFavoriteButton("products")}
          id={favoriteButton === "products" ? "activeButton" : ""}
          >
            Produtos Gerais
          </ProductButton>
        </Filter>
        <Grid container justify="center" spacing={4}>
          {favorite.map((product) => (
            <Grid item xs={12} sm={6} md={6} lg={6} >
              <ProductCard
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                formatedPrice={product.formatedPrice}
                image={product.image}
                largeImage={product.largeImage}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  } else {
    return (
      <Container>
        <Filter>
          <FavoriteButton
            onClick={() => setFavoriteButton("favorites")}
            id={favoriteButton === "favorites" ? "activeButton" : ""}
          >
            Favoritos
          </FavoriteButton>
          <ProductButton
            onClick={() => setFavoriteButton("produtos")}
            id={favoriteButton === "products" ? "activeButton" : ""}
          >
            Produtos Gerais
          </ProductButton>
        </Filter>
        <Grid container justify="center" spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ProductCard
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                formatedPrice={product.formatedPrice}
                image={product.image}
                largeImage={product.largeImage}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
};

//Navbar global
Home.Layout = MainLayout;

export default Home;
