import { Box, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import { ReactElement } from "react";
import Section from "../Section";

const Footer = (): ReactElement => {
  return (
    <Section delay={0.8}>
      <Box flexGrow={1}>
        <Wrap spacing={2} w={["container.xs", "46em"]}>
          <WrapItem flexWrap={"wrap"}>
            <VStack></VStack>
          </WrapItem>
        </Wrap>
      </Box>
    </Section>
  );
};

export default Footer;
