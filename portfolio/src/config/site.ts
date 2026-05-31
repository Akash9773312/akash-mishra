import type { NavItem } from "@/types/nav"
import { USER } from "@/features/portfolio/data/user"

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.NEXT_PUBLIC_APP_URL || "https://akashmishra.dev",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const MAIN_NAV: NavItem[] = [
  {
    title: "Blog",
    href: "/blog",
  },
]

export const MOBILE_NAV: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  ...MAIN_NAV,
]

export const GITHUB_USERNAME = "Akash9773312"
export const SOURCE_CODE_GITHUB_REPO = "Akash9773312/akash-mishra"
export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/Akash9773312/akash-mishra"

export const SPONSORSHIP_URL = ""

export const UTM_PARAMS = {
  utm_source: "akashmishra.dev",
}
