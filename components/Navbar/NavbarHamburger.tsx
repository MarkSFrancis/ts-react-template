import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Flex, IconButton } from "@chakra-ui/react";
import React, { FC } from "react";

export const NavbarHamburger: FC<{
  isOpen: boolean;
  onToggle: () => void;
}> = ({ isOpen, onToggle }) => {
  return (
    <Flex
      flex={{ base: 1, md: "auto" }}
      ml={{ base: -2 }}
      display={{ base: "flex", md: "none" }}
    >
      <IconButton
        onClick={onToggle}
        icon={
          isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
        }
        variant={"ghost"}
        aria-label={"Show navigation"}
      />
    </Flex>
  );
};
