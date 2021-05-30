import { ThemeTypings } from "@chakra-ui/react";
import React, { FC, ReactNode, useContext } from "react";
import { NavItem } from "./models";

export interface NavbarContext {
  brand: ReactNode;
  links: NavItem[];
  cta: ReactNode;
  colorScheme?: ThemeTypings["colorSchemes"];
}

const navbarContext = React.createContext<NavbarContext | undefined>(undefined);

export const NavbarContextProvider: FC<NavbarContext> = ({
  children,
  ...value
}) => {
  value = {
    colorScheme: "blue",
    ...value,
  };

  return (
    <navbarContext.Provider value={value}>{children}</navbarContext.Provider>
  );
};

export const useNavbarContext = () => {
  const context = useContext(navbarContext);

  if (typeof context === "undefined") {
    throw new Error(
      "No value found for navbar context. Did you forget to add a navbar provider?"
    );
  }

  return context;
};
