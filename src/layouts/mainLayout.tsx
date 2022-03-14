import React from "react";
import Head from "next/head";

import NavBar from "../components/navBar";

import * as Styled from "~/styles/styles";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Head>
        <title>Acme Inc.</title>
      </Head>
      <Styled.Container>
        <NavBar />
        {children}
      </Styled.Container>
    </>
  );
}
