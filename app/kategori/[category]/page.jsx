import ImageBanner from '@/app/components/ImageBanner.component'
import { getBlogs, getCategories } from '@/app/utils/ghost'
import { formatDistance, subDays } from 'date-fns'
import { tr } from 'date-fns/locale'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

export const revalidate = 10

export default async function Page ({ params: { category } }) {
  const blogs = await getBlogs(category)

  if (!blogs) {
    notFound()
  }

  return (
    <section>
      <div className='z-10 my-12'>
        <h1 className='z-20 max-w-xl mx-auto text-3xl font-black tracking-tight text-center bg-white/80 backdrop-blur-md rounded-t-xl md:max-w-2xl lg:max-w-3xl xs:text-4xl md:text-5xl lg:text-6xl font-lato'>
          {blogs[0]?.tags[0]?.name}
        </h1>
      </div>
      <div className='grid p-4  max-w-7xl grid-cols-[repeat(auto-fill,minmax(320px,1fr))] mx-auto gap-4'>
        {blogs.map((blog, idx) => (
          <div
            key={idx}
            className='flex flex-col max-w-xl gap-4 p-4 h-[36.7rem] sm:h-[37rem] md:h-[35rem] mx-auto transition-all bg-white border rounded-md sm:gap-5 md:max-w-none group hover:bg-slate-50 border-slate-200/80'
          >
            <div className='p-2 h-fit'>
              <ImageBanner
                image={blog.feature_image}
                alt={blog.feature_image_alt}
              />
            </div>
            <div className='flex flex-col h-full p-2'>
              <div className='flex flex-col flex-1 space-y-3'>
                <Link href={`/kategori/${category}/${blog.slug}`}>
                  <h1 className='text-2xl font-black tracking-tight transition-all line-clamp-2 hover:decoration-blue-500 hover:text-blue-600 sm:text-3xl hover:underline underline-offset-2 font-lato decoration-black decoration-2 decoration-dashed hover:opacity-80 hover:transition-colors'>
                    {blog.title}
                  </h1>
                </Link>
                <p className='text-slate-600 line-clamp-3'>{blog.excerpt}</p>
              </div>
              <div className='flex flex-col items-start justify-end h-full'>
                <div className='flex flex-wrap gap-4 mb-3'>
                  {blog.tags.map((tag, idx) => (
                    <div
                      key={idx}
                      className='px-4 py-2 bg-white border rounded-md border-slate-200/50 text-slate-800'
                    >
                      {tag.name}
                    </div>
                  ))}
                </div>
                <div className='text-slate-600/80 '>
                  {formatDistance(
                    subDays(new Date(blog.created_at), 0),
                    new Date(),
                    { addSuffix: true, locale: tr }
                  )}{' '}
                  paylaşıldı.
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
