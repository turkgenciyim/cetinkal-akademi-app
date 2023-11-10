'use client'
import Link from 'next/link'

import React from 'react'
const Navigation = () => {
  return (
    <nav
      className={
        'flex items-center justify-center w-full z-20 gap-8 py-12 bg-blue-50/30 border-b border-gray-100 backdrop-blur-[1px]'
      }
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
  )
}

export default Navigation
