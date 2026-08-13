export interface CosmicImage {
  url: string
  imgix_url: string
}

export interface CosmicObject {
  id: string
  slug: string
  title: string
  content?: string
  metadata: Record<string, any>
  type: string
  created_at: string
  modified_at: string
}

export interface MenuCategory extends CosmicObject {
  type: 'menu-categories'
  metadata: {
    description?: string
    display_order?: number
    image?: CosmicImage
  }
}

export interface MenuItem extends CosmicObject {
  type: 'menu-items'
  metadata: {
    description?: string
    price?: number | string
    image?: CosmicImage
    category?: MenuCategory
    dietary_info?: string[]
    chefs_feature?: boolean
  }
}

export interface Location extends CosmicObject {
  type: 'locations'
  metadata: {
    address?: string
    phone?: string
    email?: string
    image?: CosmicImage
    hours?: string
    accepting_reservations?: boolean
    reservation_url?: string
    reservation_notes?: string
  }
}

export interface Review extends CosmicObject {
  type: 'reviews'
  metadata: {
    reviewer_name?: string
    rating?: number | string
    review?: string
    visit_date?: string
    location?: Location
  }
}