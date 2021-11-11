import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../src/components/layouts/main";
import { AppContext, AppProps } from "next/app";
import theme from "../theme";

const Website = ({ Component, pageProps, router }: AppProps & AppContext) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  );
};

export default Website;
