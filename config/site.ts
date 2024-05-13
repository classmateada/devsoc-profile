export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Ada's Profile",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "classmateada.com",
      href: "https://www.classmateada.com",
    },
    {
      label: "About",
      href: "/#about",
    }
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		personalSite: "https://www.classmateada.com",
		linkedin: "https://www.linkedin.com/in/ada-mu/",
		github: "https://github.com/classmateada",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.com/users/1148121716162302012",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
