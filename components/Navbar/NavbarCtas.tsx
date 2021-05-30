import { Stack } from "@chakra-ui/react";
import React, { FC } from "react";
import { useNavbarContext } from "./NavbarContext";

/**
 * Shows items to the end of the navbar, usually for authentication, searching, etc.
 */
export const NavbarCta: FC = () => {
  const { cta } = useNavbarContext();

  return (
    <Stack
      flex={{ base: 1, md: 0 }}
      justify={"flex-end"}
      direction={"row"}
      spacing={6}
    >
      {cta}
    </Stack>
  );
};
