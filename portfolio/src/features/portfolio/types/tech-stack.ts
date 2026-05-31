/**
 * A technology item displayed in the Tech Stack section.
 */
export type TechStack = {
  /** Unique identifier (used as React key). */
  key: string
  /** Display name of the technology. */
  title: string
  /** Official website URL. */
  href: string
  /** Category tags used for grouping/filtering. */
  categories: string[]
  /**
   * Optional Simple Icons slug (https://simpleicons.org). When set, the icon is
   * loaded from cdn.simpleicons.org. When omitted, a text-only chip is rendered
   * (use this for brands without a Simple Icons entry, e.g. cloud providers).
   */
  iconSlug?: string
}
