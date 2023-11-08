// ghost-client.ts

import GhostContentAPI from '@tryghost/content-api'

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: process.env.GHOST_URL,
  key: process.env.GHOST_KEY,
  version: 'v5.0'
})

export async function getCategories (category) {
  return await api.tags
    .browse({
      order: 'slug ASC'
      // filter: `tags:[${category}]`
    })
    .catch(err => {
      throw new Error(err)
    })
}

export async function getBlogsByTag (category) {
  return await api.tags
    .browse({
      order: 'slug ASC'
      // filter: `tags:[yangin-sigortasi]`
    })
    .catch(err => {
      throw new Error(err)
    })
}
export async function getBlogs (params) {
  return await api.posts
    .browse({
      fields:
        'slug,title,excerpt,feature_image,feature_image_caption,created_at',
      include: ['tags'],
      filter: `tags:[${params && params}]`
    })
    .catch(err => {
      throw new Error(err)
    })
}

// [blog] Get Single Blog
export async function getSingleBlog (postSlug) {
  return await api.posts
    .read(
      {
        slug: postSlug
      },

      {
        include: ['tags', 'count.posts']
      }
    )
    .catch(err => {
      console.error(err)
    })
}

// [sitemap] Create Sitemap for Blogs
export async function getSitemapBlogs () {
  return await api.posts
    .browse({
      fields: 'slug,updated_at',
      limit: 10
    })
    .catch(err => {
      throw new Error(err)
    })
}
