import React, { useEffect } from "react";
import Link from "next/link";

import ProductCard from "~/components/productCard";
import Grid from "@material-ui/core/Grid";

import { useCart } from "~/contexts/product";
import { MainLayout } from "~/layouts/mainLayout";

import {
  Container,
} from "~/styles/styles";

const Home = () => {
  const { products, favorite } = useCart();
  console.log(favorite);

  return (
    <Container>
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
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

Home.Layout = MainLayout;

export default Home;

//href={`products/${product.id}`}
