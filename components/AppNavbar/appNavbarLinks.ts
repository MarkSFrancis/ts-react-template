import { NavItem } from '../Navbar/models';

export const appNavbarLinks: NavItem[] = [
  {
    id: "inspiration",
    label: "Inspiration",
    children: [
      {
        id: "design-work",
        label: "Explore Design Work",
        subLabel: "Trending Design to inspire you",
        href: "#",
      },
      {
        id: "new-noteworthy",
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
    ],
  },
  {
    id: "find-work",
    label: "Find Work",
    children: [
      {
        id: "job-board",
        label: "Job Board",
        subLabel: "Find your dream design job",
        href: "#",
      },
      {
        id: "freelance-projects",
        label: "Freelance Projects",
        subLabel: "An exclusive list for contract work",
        href: "#",
      },
    ],
  },
  {
    id: "learn-design",
    label: "Learn Design",
    href: "#",
  },
  {
    id: "hire-designers",
    label: "Hire Designers",
    href: "#",
  },
];
