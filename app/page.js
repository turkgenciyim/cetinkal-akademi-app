import Image from 'next/image'
import { getBlogs } from './utils/ghost'
import Link from 'next/link'
import { formatDistance, subDays } from 'date-fns'
import { tr } from 'date-fns/locale'
import ImageBanner from './components/ImageBanner.component'

export const revalidate = 10
export default async function Home () {
  const { blogs } = await getBlog()

  return (
    <section className='p-4 mx-auto space-y-12'>
      <h1 className='max-w-xl mx-auto mt-24 text-4xl font-black tracking-tight text-center md:max-w-2xl lg:max-w-3xl md:my-8 xs:text-5xl md:text-6xl lg:text-7xl font-lato'>
        Çetinkal Akademi ile{' '}
        <span className='font-sans text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-rose-500'>
          sigortalı olduğunuzu
        </span>{' '}
        hatırlatıyoruz.
      </h1>
      <div className='grid max-w-7xl grid-cols-[repeat(auto-fill,minmax(320px,1fr))]  mx-auto gap-4'>
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
                <Link href={`/blog/${blog.slug}`}>
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
async function getBlog () {
  const blogs = await getBlogs()
  return { blogs }
}
