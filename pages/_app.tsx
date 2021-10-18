import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layouts/main";
import { AppContext, AppProps } from "next/app";
import theme from "../theme";
import {useRouter} from "next/router";

const Website = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  );
};

export default Website;
