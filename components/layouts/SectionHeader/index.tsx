import React, { ReactElement } from "react";
import { Box } from "@chakra-ui/layout";
const SectionHeader = ({ message }: { message: string }): ReactElement => {
  return (
    <>
      <Box
        borderRadius="lg"
        bg="rgba(255,255,255,0.1)"
        p={3}
        mb={6}
        align="center"
      >
        {message}
      </Box>
    </>
  );
};

export default SectionHeader;
