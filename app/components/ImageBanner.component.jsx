'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const ImageBanner = ({ image, alt }) => {
  const [isLoading, setLoading] = useState(true)

  return (
    <div className='relative flex-shrink-0 w-full h-56 mx-auto overflow-hidden rounded-md sm:h-64 md:mx-0 lg:h-56 md:h-44'>
      <Image
        src={image}
        fill
        alt={alt}
        title={alt}
        sizes='(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw'
        role='banner'
        className={`
        duration-700 object-cover ease-in-out group-hover:opacity-75
        ${
          isLoading
            ? 'scale-110 blur-md grayscale'
            : 'scale-100 blur-0 grayscale-0'
        })`}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  )
}

export default ImageBanner
