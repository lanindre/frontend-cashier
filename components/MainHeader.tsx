import Link from 'next/link'
import React from 'react'

const MainHeader = () => {
  return (
    <div className="bg-red-500">
        MainHeader
        <ul>
            <Link href="/">
                <li>Home</li>
            </Link>
            <Link href="/about">
                <li>About</li>
            </Link>
            <Link href="/category">
                <li>Category</li>
            </Link>
        </ul>
    </div>
  )
}

export default MainHeader