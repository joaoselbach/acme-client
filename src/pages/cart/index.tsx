import React, { useEffect } from "react";
import { useCart } from "~/contexts/product";

import { useRouter } from "next/router";

import Grid from "@material-ui/core/Grid";

import { MainLayout } from "~/layouts/mainLayout";

import { Container } from "~/styles/styles";
import CartItem from "~/components/cartItem";

const Cart = () => {
  const router = useRouter();
  const { cart, setCart } = useCart();

  const total = Intl.NumberFormat(`pt-BR`, { currency: 'BRL', style: 'currency' }).format(cart.reduce((acc, product) =>  Number(product.price) + acc, 0));

  function handleCheckout() {
    router.replace("/api/checkout", {
      query: {
        cart: JSON.stringify(cart),
      }
    })
  }

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
            />
          </Grid>
        ))}
      </Grid>
      <h1>Subtotal: {total}</h1> <br />
      <button onClick={() => setCart([])}>remover todos</button>
      <button onClick={() => handleCheckout()}>checkout</button>
    </Container>
  );
};

Cart.Layout = MainLayout;

export default Cart;
