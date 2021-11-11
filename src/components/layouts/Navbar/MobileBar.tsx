import {
  Flex,
  Box,
  Button,
  Menu,
  MenuButton,
  Spacer,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Link from "next/link";
import React, { ReactElement } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoInstagram,
} from "react-icons/io5";

type MenuItemType = {
  blank: boolean;
  text: string | null;
  href: string;
  icon: any;
};

const MenuListItems: MenuItemType[] = [
  {
    blank: false,
    text: "HOME",
    href: "/",
    icon: null,
  },
  {
    blank: false,
    text: "BLOGS",
    href: "/blog",
    icon: null,
  },
  {
    blank: false,
    text: "ART",
    href: "/art",
    icon: null,
  },
  {
    blank: true,
    text: null,
    href: "http://github.com/jonroosevelt",
    icon: <IoLogoGithub />,
  },
  {
    blank: true,
    text: null,
    href: "http://twitter.com/jonroosevelt",
    icon: <IoLogoTwitter />,
  },
  {
    blank: true,
    text: null,
    href: "http://linkedin.com/in/jonathanmartins88",
    icon: <IoLogoLinkedin />,
  },
  {
    blank: true,
    text: null,
    href: "http://instagram.com/jonroosevelt",
    icon: <IoLogoInstagram />,
  },
];

const MenuItems = (): ReactElement[] => {
  return MenuListItems.map(({ text, href, icon }: MenuItemType) => {
    return (
      <Link key={href} href={href} passHref>
        <MenuItem href={href}>{text || <a>{icon}</a>}</MenuItem>
      </Link>
    );
  });
};

const MobileBar: NextPage = () => {
  return (
    <Flex>
      <Box p="3" />
      <Spacer />
      <Box>
        <Menu>
          <MenuButton as={Button} mr="4">
            <GiHamburgerMenu />
          </MenuButton>
          <MenuList alignItems="flex-end">{MenuItems()}</MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};
export default MobileBar;
