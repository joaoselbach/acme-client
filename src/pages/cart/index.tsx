import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useCart } from "~/contexts/product";

import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";

import { MainLayout } from "~/layouts/mainLayout";

import CartItem from "~/components/cartItem";
import { Subtotal, Buttons, Container } from "./styles";

const Cart = () => {
  const router = useRouter();
  const { cart, setCart } = useCart();

  function handleCheckout() {
    console.log("🚀 ~ file: index.tsx ~ line 16 ~ Cart ~ cart", {
      items: {
        cart,
      },
    });
  }

  const total = Intl.NumberFormat(`pt-BR`, {
    currency: "BRL",
    style: "currency",
  }).format(cart.reduce((acc, product) => Number(product.price) + acc, 0));

  return (
    <Container>
      <Grid container justify="center" spacing={4}>
        {cart.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CartItem
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
      <Subtotal>
          <h1>Subtotal: {total}</h1> <br />
        <Buttons>
          <Button
            size="large"
            type="button"
            variant="contained"
            color="primary"
            onClick={() => setCart([])}
          >
            Limpar tudo
          </Button>
          <Button
            size="large"
            type="button"
            variant="contained"
            color="primary"
            onClick={() => handleCheckout()}
          >
            Checkout
          </Button>
        </Buttons>
      </Subtotal>
    </Container>
  );
};

Cart.Layout = MainLayout;

export default Cart;
