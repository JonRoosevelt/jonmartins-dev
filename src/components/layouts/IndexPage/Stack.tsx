import {
  Box,
  Heading,
  HStack,
  StackDivider,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import React, { ReactElement } from "react";
import Section from "../Section";

const stackTableData = [
  { head: "Front End", body: ["React", "NextJS", "HTML", "CSS"] },
  { head: "Back End", body: ["Node", ".NET", "Django", "Flask"] },
  { head: "Languages", body: ["Javascript", "Typescript", "Python", "C#"] },
  {
    head: "Design",
    body: ["Illustrator", "Photoshop", "Figma", "Free-hand illustration"],
  },
];

const WrapItems = styled.div`
  ul {
    justify-content: space-between;
  }
`;

const Stack = (): ReactElement => {
  return (
    <Section delay={0.7}>
      <Heading fontSize={24} as="h3" mt="40px">
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
        <WrapItems>
          <Wrap spacing={2} w={["container.xs", "46em"]}>
            {stackTableData.map((column) => (
              <WrapItem flexWrap={"wrap"} key={column.head}>
                <VStack
                  divider={<StackDivider borderColor="red" />}
                  spacing={4}
                  align="stretch"
                  key={column.head}
                >
                  <Box w="container.xs">
                    <Heading color="teal.100" fontSize={18} as="h5" mb="10px">
                      {column.head}
                    </Heading>
                    {column.body.map((row) => (
                      <p key={row}>{row}</p>
                    ))}
                  </Box>
                </VStack>
              </WrapItem>
            ))}
          </Wrap>
        </WrapItems>
      </Box>
    </Section>
  );
};

export default Stack;
