import {
  Flex,
  Text,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { DesktopNavbar } from "./DesktopNavbar";
import { useNavbarContext } from "./NavbarContext";

/**
 * Shows the logo in the centre on mobile, and the navbar links on desktop
 */
export const NavbarBanner = () => {
  const { brand, colorScheme } = useNavbarContext();

  return (
    <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
      <Text
        textAlign={useBreakpointValue({ base: "center", md: "left" })}
        fontFamily="heading"
        color={useColorModeValue(`${colorScheme}.500`, `${colorScheme}.300`)}
        fontWeight="bold"
      >
        {brand}
      </Text>

      <Flex display={{ base: "none", md: "flex" }} ml={10}>
        <DesktopNavbar />
      </Flex>
    </Flex>
  );
};
