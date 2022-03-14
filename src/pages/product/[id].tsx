import { useRouter } from "next/router";
import { useEffect } from "react";
import { useCart } from "~/contexts/product";
import { MainLayout } from "~/layouts/mainLayout";

import * as Styled from "./styles";

const Product = () => {
  const router = useRouter();
  const { products } = useCart();

  useEffect(() => {
    if (!router.query.id) {
      router.push("/");
      return;
    }
    const currentProduct = products.find(
      (product) => product.id === Number(router.query.id)
    );

    console.log(currentProduct);
  }, [router.query.id]);


  return (
    <Styled.MainBanner>
      <h1>{JSON.stringify(router.query.id)}</h1>
    </Styled.MainBanner>
  );
};

Product.Layout = MainLayout;

export default Product;
