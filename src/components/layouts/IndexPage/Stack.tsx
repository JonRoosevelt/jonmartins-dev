import {
  Box,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";
import Section from "../Section";

const Stack = (): ReactElement => {
  return (
    <Section delay={0.7}>
      <Heading as="h3" mt="40px">
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
      <Box flexGrow={1} mt="32px">
        <Table variant="simple">
          <Thead>
            <Th>Front End</Th>
            <Th>Back End</Th>
            <Th>Languages</Th>
            <Th>Design</Th>
          </Thead>
          <Tbody>
            <Tr>
              <Td>React </Td>
              <Td>NextJS</Td>
              <Td>Html </Td>
              <Td>CSS </Td>
            </Tr>
            <Tr>
              <Td>Node</Td>
              <Td>.NET</Td>
              <Td>Django</Td>
              <Td>Flask</Td>
            </Tr>
            <Tr>
              <Td>Illustrator</Td>
              <Td>Photoshop</Td>
              <Td>Figma</Td>
              <Td>Free hand illustration</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Section>
  );
};

export default Stack;
