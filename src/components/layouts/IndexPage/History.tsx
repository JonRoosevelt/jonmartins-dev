import { Box, Heading } from "@chakra-ui/react";
import { ReactElement } from "react";
import Section from "../Section";

const History = (): ReactElement => {
  return (
    <Section delay={0.6}>
      <Heading fontSize={24} as="h3" mt="40px">
        History
      </Heading>
      <Box flexGrow={1} mt="20px">
        <p>I was born in Brazil, a son of the 80&apos;s.</p>
        <br />
        <p>
          I started drawing as a little kid, got my first gig as an illustrator
          at 13. At 16 I switched to design and started a technical course in
          SENAI, which is a famous design school in Brazil. I worked from 16 to
          26 as a designer, from printing companies to agencies and as a
          freelancer as well (which I occasionally still do).
        </p>
        <br />
        <p>
          On 2014, after the Football (yeah, it&apos;s called football and not
          soccer) World Cup, a huge crisis hit Brazil and I lost my job as a
          designer. I was already studying computer programming before so it was
          the last drop of water to make a career change.
        </p>
        <br />
        <p>
          During this period I&apos;ve enrolled in a System Analysis and Design
          minor and started to do some freelancing.
        </p>
        <br />
        <p>
          On 2019 I got my first actual job a a programmer. Ever since I have
          worked in several different companies with lots of contexts. I&apos;ve
          learned a lot, from back to front end, from testing to scrum, from
          feature branch to trunck based development, from working in flip flops
          to leaving to home at past midnight. I was able to work in lots of
          technologies and multiple background people, which have contributed to
          who I am right now. s
        </p>{" "}
      </Box>
    </Section>
  );
};

export default History;
