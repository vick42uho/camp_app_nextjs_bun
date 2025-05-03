import { BookHeart, HouseIcon, Settings, TentIcon, User2Icon } from "lucide-react";

type NavbarLink = {
    label: string;
    icon: React.ReactNode;
    href: string;
}

export const links: NavbarLink[] = [
    {
      label: "home",
      icon: <HouseIcon className="h-4 w-4" />,
      href: "/",
    },
    {
      label: "camp",
      icon: <TentIcon className="h-4 w-4" />,
      href: "/camp",
    },
    {
      label: "Create Landmark",
      icon: <TentIcon className="h-4 w-4" />,
      href: "/camp/create",
    },
    {
      label: "Favorites",
      icon: <BookHeart className="h-4 w-4" />,
      href: "/favorites",
    },
    {
      label: "Profile",
      icon: <User2Icon className="h-4 w-4" />,
      href: "/profile",
    },
    {
      label: "Settings",
      icon: <Settings className="h-4 w-4" />,
      href: "/settings",
    },
  ];