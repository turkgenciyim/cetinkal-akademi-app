import '../../blog.css'

import Image from 'next/image'
import { getSingleBlog, getBlogs } from '@/app/utils/ghost'
import { notFound } from 'next/navigation'
import { formatDistance, subDays } from 'date-fns'
import { tr } from 'date-fns/locale'

export async function generateStaticParams () {
  const posts = await getBlogs()
  return posts.map(post => ({
    slug: post.slug
  }))
}
export const revalidate = 10

export default async function Pages ({ params }) {
  const blog = await getSingleBlog(params.slug)

  if (!blog) {
    notFound()
  }

  return (
    <article className='z-10 max-w-4xl min-h-screen p-4 mx-auto space-y-8'>
      <div className='my-8 md:my-16'>
        <div className='max-w-3xl mx-auto space-y-6'>
          <h1 className='pb-2 text-4xl font-black tracking-tight text-center text-transparent sm:text-6xl font-lato bg-clip-text bg-gradient-to-tr from-blue-950 to-blue-950'>
            {blog.title}
          </h1>
          <p className='max-w-xl mx-auto text-center sm:text-lg text-slate-700'>
            {blog.excerpt}
          </p>
        </div>
        <div className='max-w-xl mx-auto h-[1px] w-full my-10 bg-slate-200'></div>
        <div className='flex flex-col items-center justify-center tracking-tight text-slate-800'>
          <div className='text-xl font-bold text-blue-950'>
            Çetinkal Sigorta tarafından
          </div>
          <div className='font-medium text-blue-500 mt-0.5'>
            {formatDistance(subDays(new Date(blog.created_at), 0), new Date(), {
              addSuffix: true,
              locale: tr
            })}{' '}
            paylaşıldı.
          </div>
          <div className='relative w-full h-[30rem] mt-12'>
            <Image
              src={blog.feature_image}
              fill
              className='object-cover rounded-md'
              alt={blog.feature_image_caption}
            />
          </div>
        </div>
      </div>
      <div
        className='content'
        dangerouslySetInnerHTML={{ __html: blog?.html }}
      ></div>
    </article>
  )
}

export async function generateMetadata ({ params: { slug } }) {
  const metaData = await getSingleBlog(slug)

  let tags = await metaData?.tags?.map(item => item.name)
  return {
    title: metaData?.title,
    description: metaData?.excerpt,
    keywords: tags,
    url: metaData?.url.replace(
      'api.sigortamglobal.com',
      'akademi.sigortamglobal.com/blog'
    ),
    siteName: metaData?.title,
    openGraph: {
      title: metaData?.title,
      description: metaData?.excerpt,
      url: metaData?.url.replace(
        'api.sigortamglobal.com',
        'akademi.sigortamglobal.com/blog'
      ),
      keywords: tags,
      images: [
        {
          url: metaData?.feature_image
        }
      ],
      locale: 'tr_TR',
      type: 'website'
    }
  }
}
