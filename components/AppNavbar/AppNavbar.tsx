import { Button } from "@chakra-ui/react";
import React, { FC } from "react";
import { Navbar } from "../Navbar";
import { ThemeToggle } from "../ThemeToggle";
import { appNavbarLinks } from "./appNavbarLinks";

export const AppNavbar: FC = () => {
  return (
    <Navbar
      brand="Logo"
      cta={<AppNavbarCta />}
      links={appNavbarLinks}
    />
  );
};

const AppNavbarCta: FC = () => (
  <>
    <Button
      as={"a"}
      fontSize={"sm"}
      fontWeight={400}
      variant={"link"}
      href={"#"}
    >
      Sign In
    </Button>
    <Button
      display={{ base: "none", md: "inline-flex" }}
      fontSize={"sm"}
      fontWeight={600}
      variant="solid"
      colorScheme="blue"
      href={"#"}
    >
      Sign Up
    </Button>
    <ThemeToggle />
  </>
);
