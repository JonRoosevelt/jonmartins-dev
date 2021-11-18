import { Box, Link, useBreakpointValue } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import Logo from "../Logo";
import Section from "../Section";
import DesktopBar from "./DesktopBar";
import MobileBar from "./MobileBar";

const Bar = (): ReactElement => {
  const desktopBar = useBreakpointValue({ base: false, md: true });
  return <>{desktopBar ? <DesktopBar /> : <MobileBar />}</>;
};
const Navbar = (): ReactElement => {
  return (
    <Section delay={0.1}>
      <Box ml={[2, 3, 0]} mt="50px">
        <Link href={"/"}>
          <Logo />
        </Link>
      </Box>
      <Bar />
    </Section>
  );
};

export default Navbar;
