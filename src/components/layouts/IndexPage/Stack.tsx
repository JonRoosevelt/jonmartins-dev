import { Box, Heading } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import ResponsiveTable from "../ResponsiveTable";
import Section from "../Section";
import { stackTableData } from "./stack-table-data";

const Stack = (): ReactElement => {
  return (
    <Section delay={0.7}>
      <Heading id="stack" fontSize={24} as="h3" mt="40px">
        Stack
      </Heading>
      <Box flexGrow={1} mt="20px">
        <p>
          As I said in my introduction, I&apos;m a technology agnostic. But that
          doesn&apos;t mean I don&apos;t have my preferences.
        </p>
        <br />
        <p>Here&apos;s a few of them:</p>
        <br />
      </Box>
      <Box className="box-stack" flexGrow={1} mt="32px">
        <ResponsiveTable tableData={stackTableData} />
      </Box>
    </Section>
  );
};

export default Stack;
