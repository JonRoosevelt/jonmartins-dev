import {
  Box,
  Button,
  HStack,
  Icon,
  Link,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import {
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoInstagram,
} from "react-icons/io5";

const DesktopBar: NextPage = () => {
  return (
    <Box
      mt={13}
      borderRadius="lg"
      bg="rgba(255,255,255,0.1)"
      padding="12px 21px"
      mb={6}
      align="center"
      hidden={useBreakpointValue({ base: true, md: false })}
    >
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
      >
        <HStack spacing="40px">
          <Link href="/">HOME</Link>
          <Link href="/blogs">BLOGS</Link>
          <Link href="/art">ART</Link>
        </HStack>
        <HStack spacing="10px">
          <Link href="http://github.com/jonroosevelt" target="_blank">
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<Icon as={IoLogoGithub} />}
            ></Button>
          </Link>
          <Link href="http://twitter.com/jonroosevelt" target="_blank">
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<Icon as={IoLogoTwitter} />}
            ></Button>
          </Link>
          <Link href="http://linkedin.com/in/jonathanmartins88" target="_blank">
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<Icon as={IoLogoLinkedin} />}
            ></Button>
          </Link>
          <Link href="http://instagram.com/jonroosevelt" target="_blank">
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<Icon as={IoLogoInstagram} />}
            ></Button>
          </Link>
        </HStack>
      </Stack>
    </Box>
  );
};

export default DesktopBar;
