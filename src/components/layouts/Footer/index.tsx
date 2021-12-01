import { Box, Container } from "@chakra-ui/react";
import { ReactElement } from "react";
import ResponsiveTable from "../ResponsiveTable";
import Section from "../Section";
import { blogPostsTableData } from "./blog-posts-table-data";

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
            <ResponsiveTable tableData={blogPostsTableData} />
          </Box>
        </Container>
      </Box>
    </Section>
  );
};

export default Footer;
