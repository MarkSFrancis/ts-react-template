import { Box, Stack, useColorModeValue } from "@chakra-ui/react";
import React, { FC } from "react";
import { MobileNavLink } from "./MobileNavbarLink";
import { useNavbarContext } from "./NavbarContext";

export const MobileNavbar: FC = () => {
  const { links } = useNavbarContext();

  return (
    <Box>
      <Stack
        bg={useColorModeValue("white", "gray.800")}
        p={4}
        display={{ md: "none" }}
        borderBottom="1px"
        borderColor={useColorModeValue("gray.300", "white")}
      >
        {links.map((navItem) => (
          <MobileNavLink key={navItem.id} {...navItem} />
        ))}
      </Stack>
    </Box>
  );
};
