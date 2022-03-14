import React from "react";
import { AppProps } from "next/app";

import GlobalStyle from "~/styles/global";

import { ProductProvider } from "~/contexts/product";

const Noop: React.FC = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }: AppProps) {

  const Layout = (Component as any).Layout || Noop; 

  return (
    <>
      <GlobalStyle />
      <ProductProvider>
        <Layout pageProps={{...pageProps}}>
          <Component {...pageProps} />
        </Layout>
      </ProductProvider>
    </>
  );
};

export default MyApp;
