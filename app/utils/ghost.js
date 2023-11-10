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
      order: 'name ASC'
      // filter: `tags:[${category}]`
    })
    .catch(err => {
      console.log(err)
      return null;
    })
}

export async function getBlogsByTag (category) {
  return await api.tags
    .browse({
      order: 'slug ASC'
      // filter: `tags:[yangin-sigortasi]`
    })
    .catch(err => {
      console.log(err)
      return null;
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
      console.log(err)
      return null;
    })
}

// [blog] Get Single Blog
export async function getSingleBlog (postSlug) {
  return await api.posts
    .read({
      slug: postSlug
    })
    .catch(err => {
      console.log(err)
      return null;
    })
}

// [sitemap] Create Sitemap for Blogs
export async function getSitemapBlogs () {
  return await api.posts
    .browse({
      fields: 'slug,updated_at',
      include: ['tags']
    })
    .catch(err => {
      console.log(err)
      return null;
    })
}
