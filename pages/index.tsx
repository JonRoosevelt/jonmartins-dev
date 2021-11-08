import {
  Container,
  Box,
  Heading,
  Img,
  SimpleGrid,
  List,
  ListItem,
  Link,
  Button,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import Section from "../components/layouts/Section";
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io5";
import SectionHeader from "../components/layouts/SectionHeader";

const Page = () => {
  const jonImage = "jon.jpeg";
  return (
    <Container>
      <SectionHeader
        message="Hello, I'm a fullstack developer based in Brazil!
      "
      />
      <Section delay={0.1}>
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
      <Section delay={0.2}>
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
      <Section delay={0.3}>
        <Box flexGrow={1} mt="50px">
          <Heading as="h4" variant="section-title">
            Links
          </Heading>
          <List mt="20px">
            <ListItem>
              <Link href="http://github.com/jonroosevelt" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @jonroosevelt
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="http://twitter.com/jonroosevelt" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @jonroosevelt
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="http://linkedin.com/in/jonathanmartins88"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  jonathanmartins88
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="http://instagram.com/jonroosevelt" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @jonroosevelt
                </Button>
              </Link>
            </ListItem>
          </List>
        </Box>
        <Box flexGrow={1} mt="50px">
          <Heading as="h4" variant="section-title">
            Blog posts
          </Heading>
          <Link href="/blog/my-first-post">
            <Button variant="ghost" colorScheme="teal">
              My First post
            </Button>
          </Link>
        </Box>
      </Section>
    </Container>
  );
};

export default Page;
