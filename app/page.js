import { getCategories } from './utils/ghost'
import Link from 'next/link'
import ImageBanner from './components/ImageBanner.component'

export const revalidate = 10
export default async function Home () {
  const categories = await getCategories()
  return (
    <section className='p-4 mx-auto space-y-12'>
      <h1 className='max-w-xl mx-auto mt-24 text-4xl font-black tracking-tight text-center font-lato md:max-w-2xl lg:max-w-3xl md:my-8 xs:text-5xl md:text-6xl lg:text-7xl'>
        Çetinkal Akademi ile{' '}
        <span className='font-sans text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-rose-500'>
          sigortalı olduğunuzu
        </span>{' '}
        hatırlatıyoruz.
      </h1>
      <div className='grid max-w-7xl grid-cols-[repeat(auto-fill,minmax(320px,1fr))]  mx-auto gap-4'>
        {categories.map((category, idx) => (
          <div
            key={idx}
            className='flex flex-col max-w-xl gap-4 p-4 mx-auto transition-all bg-white border rounded-md sm:gap-5 md:max-w-none group hover:bg-slate-50 border-slate-200/80'
          >
            <div className='p-2 h-fit'>
              <ImageBanner
                key={idx}
                image={category.feature_image}
                alt={'Kategori Kapak Fotoğrafı'}
              />
            </div>
            <div className='flex flex-col h-full p-2'>
              <div className='flex flex-col flex-1 space-y-3'>
                <Link href={`/kategori/${category.slug}`}>  
                  <h1 className='text-2xl font-black tracking-tight transition-all line-clamp-2 hover:decoration-blue-500 hover:text-blue-600 sm:text-3xl hover:underline underline-offset-2 decoration-black decoration-2 decoration-dashed hover:opacity-80 hover:transition-colors'>
                    {category.name}
                  </h1>
                </Link>
                <p className='text-slate-600 line-clamp-3'>
                  {category.description}
                </p>
              </div>
            </div>
          </div>
        ))}{' '}
      </div>
    </section>
  )
}
