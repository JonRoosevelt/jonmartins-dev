import { Box, Container, Heading, Img } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import Section from "../src/components/layouts/Section";

const Page = (): ReactElement => {
  const jonImage = "jon.jpeg";
  return (
    <>
      <Section delay={0.3}>
        <Box display={{ md: "flex" }}>
          <Box>
            <Img
              src={jonImage}
              alt="Jon Martins"
              boxSize="100px"
              objectFit="cover"
              borderRadius="full"
              mr="50px"
              mb="25px"
            />
          </Box>
          <Box flexGrow={1} mt="10px">
            <Heading as="h2" variant="page-title">
              Jon Martins
            </Heading>
            <p>Artist / Developer / Designer</p>
          </Box>
        </Box>
      </Section>
      <Section delay={0.5}>
        <Heading as="h2" mt="50px" variant="section-title">
          Hello
        </Heading>
        <Box flexGrow={1} mt="20px">
          <p>Hello, my name is Jon Martins 👋🏽</p>
          <br />

          <p>
            I&apos;m a fullstack developer from Brazil, working specifically
            with NodeJS, Python, React, Typescript and .NET
          </p>
          <br />
          <p>
            Though I am mostly focused in these technologies, I truly believe
            that developers should see tech as tools. If you&apos;re lost on a
            beach and you need to write a message to a plane, you won&apos;t use
            the most modern pen to do it. You won&apos;t use an iPad to do it.
            You&apos;ll use sticks, stones and palm leaves! 🏝
          </p>
          <br />
          <p>
            To ensure a nice final product, I really like to write tests. For me
            TDD is one of the best ways to make sure you won&apos;t have that
            many bugs in production - though, you will 🤣
          </p>
          <br />
        </Box>
        <Box flexGrow={1} mt="10px">
          <p>
            Want to say hi, see my code or just read some awesome tweets? Follow
            me up on one of my links
          </p>
          <br />
          <p>See you! 👀</p>
        </Box>
      </Section>
    </>
  );
};

export default Page;
