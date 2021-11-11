import { Box, useBreakpointValue } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import JmLogo from "../JmLogo";
import FullLogo from "../JmLogo/FullLogo";
import Section from "../Section";
import DesktopBar from "./DesktopBar";
import MobileBar from "./MobileBar";

const Logo = (): ReactElement => {
  const fullLogo = useBreakpointValue({ base: false, md: true });
  return <Box>{fullLogo ? <FullLogo /> : <JmLogo fill="teal" />}</Box>;
};
const Bar = (): ReactElement => {
  const desktopBar = useBreakpointValue({ base: false, md: true });
  return <>{desktopBar ? <DesktopBar /> : <MobileBar />}</>;
};
const Navbar = (): ReactElement => {
  return (
    <Section delay={0.1}>
      <Box ml={[2, 3, 0]} mt="50px">
        <Logo />
      </Box>
      <Bar />
    </Section>
  );
};

export default Navbar;
