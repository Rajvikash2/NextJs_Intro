import React from 'react'
import Link from 'next/link'
export default function Navbar() {
  return (
            <nav >
            <ul className='flex flex-row gap-6 text-blue-600 justify-center shadow-lg shadow-gray-600 mb-20'>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/news">News</Link></li>
            </ul>
          </nav>
  )
}
