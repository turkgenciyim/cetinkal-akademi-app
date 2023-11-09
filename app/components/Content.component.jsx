'use client'
import React, { useEffect } from 'react'
import {
  useParams,
  usePathname,
  useSearchParams,
  useRouter
} from 'next/navigation'

const Content = ({ html }) => {
  useEffect(() => {
    
  })

  return (
    <div className='content' dangerouslySetInnerHTML={{ __html: html }}></div>
  )
}

export default Content
