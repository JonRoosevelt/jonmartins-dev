import Head from "next/head";
import Navbar from "./Navbar";
import { Box, Container } from "@chakra-ui/react";
import type { AppContext } from "next/app";

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
      <Container maxW="container.md" pt={14}>
        <Container>
          <Navbar />
          {children}
        </Container>
      </Container>
    </Box>
  );
};

export default Main;
