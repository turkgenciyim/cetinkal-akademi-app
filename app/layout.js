import './globals.css'
import { Lato, DM_Sans } from 'next/font/google'
import ScrollButton from './ScrollButton'
import Link from 'next/link'

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  variable: '--font-lato'
})
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans'
})

export const metadata = {
  title: {
    template: '%s | Çetinkal Akademi',
    default: 'Çetinkal Akademi'
  },
  siteName: 'Çetinkal Akademi',
  authors: 'Çetinkal Sigorta',
  creator: 'Çetinkal Sigorta',
  description:
    'Çetinkal Akademi sayesinde sigorta ile ilgili merak edilen yazıları ve blogları buradan bulabilir ve okuyabilirsiniz.',
  keywords: [
    'Akademi',
    'Çetinkal Akademi',
    ' Çetinkal Sigorta',
    'Sigorta Nedir',
    'sigortacılık nedir'
  ],
  icons: {
    icon: 'favicon.ico'
  }
}
export default function RootLayout ({ children }) {
  return (
    <html lang='tr' suppressHydrationWarning={true}>
      <head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body className={`${dmSans.className} ${lato.variable}`}>
        <ScrollButton />
        <nav
          className='
      flex items-center justify-center w-full z-20 gap-8 py-12 bg-blue-50/30 border-b border-gray-100 backdrop-blur-[1px]'
        >
          <Link
            href={'/'}
            className='flex items-center space-x-1 font-medium text-gray-600 transition-colors hover:text-gray-800'
          >
            <span>Anasayfa</span>
          </Link>
          <Link
            href={'https://www.cetinkalsigorta.com/hakkimizda'}
            className='flex items-center space-x-1 font-medium text-gray-600 transition-colors hover:text-gray-800'
          >
            <span>Hakkımızda</span>
          </Link>

          <Link
            href={'https://www.cetinkalsigorta.com/iletisim'}
            className='flex items-center space-x-1 font-medium text-gray-600 transition-colors hover:text-gray-800'
          >
            <span>İletişim</span>
          </Link>
        </nav>
        <main>{children}</main>
        <footer className='bg-gradient-to-t from-blue-200 via-sky-50 to-sky-50'>
          <div className='max-w-screen-xl px-4 py-32 mx-auto lg:flex lg:items-center'>
            <div className='max-w-2xl mx-auto text-center'>
              <h1 className='text-3xl font-semibold tracking-tight sm:text-4xl text-sky-950'>
                Bu paylaşılan yazılardan Şirketimiz
                <strong className='font-extrabold tracking-tighter text-blue-500 sm:block'>
                  sorumlu değildir.
                </strong>
              </h1>

              <p className='max-w-lg mx-auto mt-4 font-medium tracking-tight text-gray-800 sm:text-xl/relaxed'>
                Çetinkal Sigorta olarak Çetinkal Akademi sitemizde sadece
                bilgilendirme amaçlı bloglar paylaşılmaktadır.
              </p>

              <div className='flex flex-wrap justify-center gap-4 mt-16'>
                <a
                  className='block w-full px-12 py-3 text-sm font-medium text-white bg-blue-600 rounded shadow hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-700 active:bg-blue-500 sm:w-auto'
                  href='https://www.cetinkalsigorta.com/iletisim/'
                >
                  İletişime Geç
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
