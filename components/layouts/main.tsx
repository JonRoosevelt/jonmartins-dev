import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import type { AppContext } from "next/app";
import Navbar from "./Navbar";
type Props = {
  children: React.ReactNode;
  router: AppContext["router"];
};

const Main = ({ children }: Props) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Jon Martins - Homepage</title>
      </Head>
      <Container maxW="container.lg" pt={14}>
        <Navbar />
        {children}
      </Container>
    </Box>
  );
};

export default Main;
