import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Link,
  useColorModeValue,
  Stack,
  Box,
  Flex,
  Icon,
  Text,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { NavItemChild } from "./models";
import { useNavbarContext } from "./NavbarContext";

export const DesktopSubNav: FC<NavItemChild> = ({ href, label, subLabel }) => {
  const { colorScheme } = useNavbarContext();

  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      colorScheme=""
      _hover={{ bg: useColorModeValue(`${colorScheme}.50`, `gray.900`) }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: `${colorScheme}.500` }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon
            color={`${colorScheme}.500`}
            w={5}
            h={5}
            as={ChevronRightIcon}
          />
        </Flex>
      </Stack>
    </Link>
  );
};
