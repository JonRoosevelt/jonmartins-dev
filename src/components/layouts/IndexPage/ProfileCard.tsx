import { Box, Img, Heading } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import Section from "../Section";

const jonImage = "jon.jpeg";

const ProfileCard = (): ReactElement => {
  return (
    <Section delay={0.3}>
      <Box mt="40px" display={{ md: "flex" }}>
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
  );
};

export default ProfileCard;
