import { Box, Link, Button } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import React, { ReactElement } from "react";

const Navbar = (): ReactElement => {
  const router = useRouter();
  if (router.asPath !== "/") {
    return (
      <Box flexGrow={1} mt="50px">
        <Link href="/">
          <Button variant="ghost" colorScheme="teal" aria-label="back to home">
            Back to Home
          </Button>
        </Link>
      </Box>
    );
  }
  return <h1>Oi</h1>;
};

export default Navbar;
