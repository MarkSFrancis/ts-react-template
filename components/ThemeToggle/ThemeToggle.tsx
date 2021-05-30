import { HStack, Switch, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { FC } from "react";

export const ThemeToggle: FC = () => {
  const theme = useColorMode();

  return (
    <HStack>
      <MoonIcon />
      <Switch
        isChecked={theme.colorMode === "light"}
        onChange={() => theme.toggleColorMode()}
      />
      <SunIcon />
    </HStack>
  );
};
