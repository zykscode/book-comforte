import type { Icons } from '#/components/icons'

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem
export type BlurredPhoto =
  | {
      base64: string
      postId?: string
      src: string
      height: number
      width: number
      type?: string | undefined
    }
  | undefined

export type SidebarNavItem = {
  title: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
} & (
  | {
      href: string
      items?: never
    }
  | {
      href?: string
      items: NavLink[]
    }
)

export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
    youtube: string
    linkedin: string
  }
}

export type DocsConfig = {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export type MarketingConfig = {
  mainNav: MainNavItem[]
}

export type DashboardConfig = {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export type SubscriptionPlan = {
  name: string
  description: string
  stripePriceId: string
}

export type UserSubscriptionPlan = SubscriptionPlan &
  Pick<User, 'stripeCustomerId' | 'stripeSubscriptionId'> & {
    stripeCurrentPeriodEnd: number
    isPro: boolean
  }
export type HomepageNavs = {
  mainNav: MainNavItem[]
}

export type BlurredPhoto =
  | {
      base64: string
      postId?: any
      src: string
      height: number
      width: number
      type?: string | undefined
    }
  | undefined
