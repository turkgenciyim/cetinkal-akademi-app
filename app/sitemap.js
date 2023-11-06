import { getSitemapBlogs } from './utils/ghost'
const URL = 'https://akademi.sigortamglobal.com'

export default async function sitemap () {
  const blogs = await getSitemapBlogs()
  const sitemapBlogs = blogs.map(({ slug, updated_at }) => ({
    url: `${URL}/blog/${slug}`,
    lastModified: new Date(updated_at),
    priority: 0.8,
    changeFrequency: 'monthly'
  }))

  return [
    {
      url: URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    ...sitemapBlogs
  ]
}
