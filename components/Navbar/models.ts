import { ReactNode } from "react";

export type NavItem = {
  id: string;
  label: ReactNode;
} & (
  | {
      href: string;
      children?: undefined;
    }
  | {
      href?: undefined;
      children: NavItemChild[];
    }
);

export interface NavItemChild {
  id: string;
  subLabel: ReactNode;
  label: ReactNode;
  href?: string;
}
