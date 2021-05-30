import {
  Box,
  Popover,
  PopoverTrigger,
  Link,
  useColorModeValue,
  PopoverContent,
  Stack,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { DesktopSubNav } from "./DesktopSubNav";
import { NavItem } from "./models";

export const DesktopNavbarLink: FC<NavItem> = ({ label, children, href }) => {
  const popoverBackground = useColorModeValue("white", "gray.800");

  return (
    <Box>
      <Popover
        trigger="hover"
        placement="bottom-start"
        openDelay={0}
        closeDelay={0}
        offset={[0, 0]}
      >
        <PopoverTrigger>
          <Link
            p={2}
            href={href}
            fontSize="sm"
            fontWeight={500}
            color={useColorModeValue("gray.600", "gray.200")}
            _hover={{
              textDecoration: "none",
              color: useColorModeValue("gray.800", "white"),
            }}
          >
            {label}
          </Link>
        </PopoverTrigger>

        {children && (
          <PopoverContent
            border={0}
            boxShadow="xl"
            bg={popoverBackground}
            p={4}
            rounded="xl"
            minW="sm"
          >
            <Stack>
              {children.map((child) => (
                <DesktopSubNav key={child.id} {...child} />
              ))}
            </Stack>
          </PopoverContent>
        )}
      </Popover>
    </Box>
  );
};
