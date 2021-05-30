import { Stack } from "@chakra-ui/react";
import React, { FC } from "react";
import { DesktopNavbarLink } from "./DesktopNavbarLink";
import { useNavbarContext } from "./NavbarContext";

export const DesktopNavbar: FC = () => {
  const { links } = useNavbarContext();

  return (
    <Stack direction="row" spacing={4}>
      {links.map((navItem) => (
        <DesktopNavbarLink key={navItem.id} {...navItem} />
      ))}
    </Stack>
  );
};
