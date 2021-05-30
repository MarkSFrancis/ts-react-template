import {
  Box,
  Flex,
  Collapse,
  useColorModeValue,
  useDisclosure,
  ThemeTypings,
} from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";
import { NavbarBanner } from "./NavbarBanner";
import { NavbarHamburger } from "./NavbarHamburger";
import { NavbarCta } from "./NavbarCtas";
import { MobileNavbar } from "./MobileNavbar";
import { NavItem } from "./models";
import { NavbarContextProvider } from "./NavbarContext";

export interface NavbarProps {
  links: NavItem[];
  brand: ReactNode;
  cta: ReactNode;
  colorScheme?: ThemeTypings["colorSchemes"];
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <NavbarContextProvider {...props}>
      <Box>
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH="60px"
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle="solid"
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align="center"
        >
          <NavbarHamburger isOpen={isOpen} onToggle={onToggle} />
          <NavbarBanner />
          <NavbarCta />
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNavbar />
        </Collapse>
      </Box>
    </NavbarContextProvider>
  );
};
