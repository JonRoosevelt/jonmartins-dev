import { Box, Container } from "@chakra-ui/react";
import { ReactElement } from "react";
import ResponsiveTable from "../ResponsiveTable";
import Section from "../Section";

const tableData = [
  {
    head: "Home",
    body: [
      { name: "Sup?", link: "/#sup" },
      { name: "History", link: "/#history" },
      { name: "Stack", link: "/#stack" },
    ],
  },
  {
    head: "Blogs",
    body: [{ name: "Dev" }, { name: "Design" }, { name: "Random" }],
  },
  { head: "Art", body: [{ name: "Drawings" }, { name: "Design" }] },
];

const Footer = (): ReactElement => {
  return (
    <Section delay={0.8}>
      <Box
        h="100%"
        mt={10}
        bg="rgba(255,255,255,0.1)"
        pt={10}
        pb={20}
        mb={-10}
        align="center"
      >
        <Container maxW={["container.xs", "container.sm", "container.md"]}>
          <Box paddingX={[4, 0]}>
            <ResponsiveTable tableData={tableData} />
          </Box>
        </Container>
      </Box>
    </Section>
  );
};

export default Footer;
