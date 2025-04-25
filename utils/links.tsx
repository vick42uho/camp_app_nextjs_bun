type NavbarLink = {
    label: string;
    href: string;
}

const links: NavbarLink[] = [
    {
      label: "home",
      href: "/",
    },
    {
      label: "Favorites",
      href: "/favorites",
    },
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Settings",
      href: "/settings",
    },
  ];

  export default links;