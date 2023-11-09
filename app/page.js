import { getCategories } from './utils/ghost'
import Link from 'next/link'
import ImageBanner from './components/ImageBanner.component'
import classnames from 'classnames'
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
      <div
        className={classnames(
          'grid max-w-7xl grid-cols-[repeat(auto-fit,minmax(270px,1fr))]  mx-auto gap-4'
        )}
      >
        {categories.map((category, idx) => (
          <div
            key={idx}
            className={classnames(
              category.name.startsWith('!')
                ? 'col-span-2 bg-blue-50 border-gray-200'
                : 'bg-gray-50/50 hover:bg-gray-50 border-gray-200/80',
              'flex flex-col max-w-xl gap-4 p-4 mx-auto transition-all border rounded-md sm:gap-5 md:max-w-none group'
            )}
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
                  <h1
                    className={classnames(
                      category.name.startsWith('!') &&
                        '!text-3xl font-semibold tracking-tight transition-all line-clamp-2',
                      'text-xl font-medium tracking-tight transition-all line-clamp-2 hover:decoration-blue-500 hover:text-blue-600 sm:text-2xl hover:underline underline-offset-2 decoration-black decoration-2 decoration-dashed hover:opacity-80 hover:transition-colors'
                    )}
                  >
                    {category.name.replace('!', '')}
                  </h1>
                </Link>
                <p className='text-gray-600 line-clamp-3'>
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
