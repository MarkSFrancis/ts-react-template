import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Collapse,
  Flex,
  Icon,
  Link,
  Stack,
  useColorModeValue,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { NavItem } from "./models";
import { useNavbarContext } from "./NavbarContext";

export const MobileNavLink: FC<NavItem> = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();
  const { colorScheme } = useNavbarContext();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href}
        justify="space-between"
        align="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition="all .25s ease-in-out"
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue(
            `${colorScheme}.100`,
            `${colorScheme}.800`
          )}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.id} py={2} href={child.href}>
                <Text color={`${colorScheme}.500`} fontWeight={500}>
                  {child.label}
                </Text>
                {child.subLabel}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
