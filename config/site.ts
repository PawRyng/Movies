export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Top Rated",
      href: "/top",
    },
    {
      label: "Popular",
      href: "/popular",
    },
  ],
  sortParams: [
    {
      label: "Date ▲",
      key: "release_date.asc",
    },
    {
      label: "Date ▼",
      key: "release_date.desc",
    },
    {
      label: "Title ▲",
      key: "title.asc",
    },
    {
      label: "Title ▼",
      key: "title.desc",
    },
  ],
};
