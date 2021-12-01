import { Box, Center, Icon } from "@chakra-ui/react";
import { NextPage } from "next";
import { GiSandsOfTime } from "react-icons/gi";
import Section from "../../src/components/layouts/Section";

const Art: NextPage = () => {
  return (
    <Section delay={0.3}>
      <Center py={6}>
        <Box minHeight="sm">
          <Icon transform={"rotate(20deg)"} as={GiSandsOfTime} /> Comming
          soon...
        </Box>
      </Center>
    </Section>
  );
};

export default Art;
