"use client"

import Image from 'next/image'
import Link from 'next/link';


export default function Home() {
  return (
    <div className='flex justify-center my-9'>
      <Link href="/" className='mx-5'><button>Home</button></Link>
      <Link href="/products" className='mx-5'><button>Products</button></Link>
    </div>
  )
}
