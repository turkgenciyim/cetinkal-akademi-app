'use client'
import React, { useEffect, useState } from 'react'

const ScrollButton = () => {
  const [showTopBtn, setShowTopBtn] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    })
  }, [])

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={goToTop}
      role='button'
      title='Üste çık'
      className={`fixed ${
        !showTopBtn && 'opacity-0'
      } bottom-6 transition-all right-6 z-[9999] bg-blue-500 drop-shadow-xl backdrop-blur-sm group px-2.5 active:scale-95  hover:bg-blue-500
         py-3.5 rounded-md text-white`}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={2}
        stroke='currentColor'
        className='relative bottom-0 w-6 h-6 md:w-8 md:h-8 transition-all group-hover:bottom-0.5'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18'
        />
      </svg>
    </button>
  )
}

export default ScrollButton
