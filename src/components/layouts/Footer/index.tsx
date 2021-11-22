import { Box, Container, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import { ReactElement } from "react";
import ResponsiveTable from "../ResponsiveTable";
import Section from "../Section";

const tableData = [
  { head: "Home", body: ["Sup?", "History", "Stack"] },
  { head: "Blogs", body: ["Sup?", "History", "Stack"] },
  { head: "Art", body: ["Sup?", "History", "Stack"] },
];

const Footer = (): ReactElement => {
  return (
    <Section delay={0.8}>
      <Box
        h="100%"
        mt={20}
        bg="rgba(255,255,255,0.1)"
        pt={10}
        pb={20}
        mb={-10}
        align="center"
      >
        <Container maxW={["container.xs", "container.md"]}>
          <Box paddingX={[4, 0]}>
            <ResponsiveTable tableData={tableData} />
          </Box>
        </Container>
      </Box>
    </Section>
  );
};

export default Footer;
