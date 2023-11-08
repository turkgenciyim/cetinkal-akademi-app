import { getSitemapBlogs } from './utils/ghost'
const URL = 'https://akademi.sigortamglobal.com'

export default async function sitemap () {
  const blogs = await getSitemapBlogs()
  const sitemapBlogs = blogs.map(({ slug, updated_at, tags }) => ({
    url: `${URL}/kategori/${tags[0].slug}/${slug}`,
    lastModified: new Date(updated_at),
    changeFrequency: 'monthly',
    priority: 0.8
  }))

  const routes = [''].map(route => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 1
  }))

  return [...routes, ...sitemapBlogs]
}
