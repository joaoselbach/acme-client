import { useRouter } from "next/router";
import * as Styled from "./styles";

import { Badge, IconButton, MenuItem } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

import Link from "next/link";

import Logo from "~/assets/logo.svg";
import { useCart } from "~/contexts/product";

const NavBar = () => {
  const router = useRouter();
  const { cart } = useCart();

  return (
    <Styled.Main
      px={[30, 50, 105]}
      py={[15, 15, 15]}
      position={["fixed", "fixed", "fixed"]}
    >
      <Styled.LogoContainer onClick={() => router.push("/")}>Acme Inc.</Styled.LogoContainer>

      <Styled.NavContainer>
        <IconButton aria-label="Show cart items" color="inherit">
          <Badge badgeContent={cart.length} color="secondary">
            <Link href={"/cart"}>
              <ShoppingCart />
            </Link>
          </Badge>
        </IconButton>
      </Styled.NavContainer>
    </Styled.Main>
  );
};

export default NavBar;
