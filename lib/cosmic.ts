import { createBucketClient } from '@cosmicjs/sdk'
import type { MenuCategory, MenuItem, Location, Review } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
  apiEnvironment: 'staging',
})

function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return ''
  if (typeof field === 'string') return field
  if (typeof field === 'number' || typeof field === 'boolean') return String(field)
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value)
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key)
  }
  return ''
}

export async function getMenuCategories(): Promise<MenuCategory[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'menu-categories' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1)

    const categories = response.objects as MenuCategory[]

    return [...categories].sort((a, b) => {
      const orderA = Number(a.metadata?.display_order ?? 0)
      const orderB = Number(b.metadata?.display_order ?? 0)
      return orderA - orderB
    })
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch menu categories')
  }
}

export async function getMenuItems(): Promise<MenuItem[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'menu-items' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1)

    return response.objects as MenuItem[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch menu items')
  }
}

export async function getFeaturedMenuItems(): Promise<MenuItem[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'menu-items', 'metadata.chefs_feature': true })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1)

    return response.objects as MenuItem[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch featured menu items')
  }
}

export async function getLocations(): Promise<Location[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'locations' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1)

    return response.objects as Location[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch locations')
  }
}

export async function getReviews(): Promise<Review[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'reviews' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1)

    const reviews = response.objects as Review[]

    return [...reviews].sort((a, b) => {
      const dateA = new Date(getMetafieldValue(a.metadata?.visit_date)).getTime()
      const dateB = new Date(getMetafieldValue(b.metadata?.visit_date)).getTime()
      return (dateB || 0) - (dateA || 0)
    })
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch reviews')
  }
}

export async function getFeaturedReviews(limit = 3): Promise<Review[]> {
  const reviews = await getReviews()

  return [...reviews]
    .sort((a, b) => {
      const ratingA = Number(getMetafieldValue(a.metadata?.rating)) || 0
      const ratingB = Number(getMetafieldValue(b.metadata?.rating)) || 0
      return ratingB - ratingA
    })
    .slice(0, limit)
}