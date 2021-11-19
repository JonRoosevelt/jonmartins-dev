import { Box, Heading, HStack, StackDivider, VStack } from "@chakra-ui/react";
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
      <Box flexGrow={1} mt="32px">
        <HStack alignItems="flex-start" spacing={{ base: 50, md: 75, lg: 100 }}>
          {stackTableData.map((column) => (
            <VStack
              divider={<StackDivider borderColor="red" />}
              spacing={4}
              align="stretch"
              key={column.head}
            >
              <Box>
                <Heading color="teal.100" fontSize={18} as="h5" mb="10px">
                  {column.head}
                </Heading>
                {column.body.map((row) => (
                  <p key={row}>{row}</p>
                ))}
              </Box>
            </VStack>
          ))}
        </HStack>
      </Box>
    </Section>
  );
};

export default Stack;
