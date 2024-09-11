import useScreenSize from "@/app/hooks/use-screen-size";
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";
import MenuDesktop from "./menu-desktop";
import MenuMobile from "./menu-mobile";

type MenuItemType = {
  blank: boolean;
  text: string | null;
  href: string;
  icon: any;
};

export const MenuListItems: MenuItemType[] = [
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

export default function Menu() {
  const { screens, windowWidth } = useScreenSize();
  const { md } = screens;

  return windowWidth > md ? <MenuDesktop /> : <MenuMobile />;
}
