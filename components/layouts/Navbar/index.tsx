import { Box, Link, Button, Icon } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import React, { ReactElement } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import JmLogo from "../JmLogo";

const Navbar = (): ReactElement => {
  const router = useRouter();
  return (
    <Box className="any" flexGrow={1} mt="50px">
      <JmLogo fill="teal" />
      {router.asPath !== "/" && (
        <Link href="/">
          <Button
            variant="ghost"
            colorScheme="teal"
            aria-label="back to home"
            leftIcon={<Icon as={IoArrowBackOutline} />}
          >
            Back to Home
          </Button>
        </Link>
      )}
    </Box>
  );
};

export default Navbar;
