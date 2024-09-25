import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div>
       <div className='flex flex-col md:flex-row justify-between items-center md:h-24 text-white'>
          <div className='md:ml-10 text-2xl font-sans font-bold text-yellow-400 md:w-0 md:h-0 w-[100%] h-[80px]  text-center place-content-center'>
          Developers.
          </div>
          <div className='flex flex-col md:flex-row md:gap-10 gap-4 mt-4 md:mt-0 md:mr-20 text-[15px] font-sans font-bold text-white'>
               <Link href={"/"}><h3>Home</h3></Link>
          <Link href={"/courses"}><h3>Courses</h3></Link>
          <Link href={"/apply"}><h3>Apply</h3></Link>
          </div>
            </div>
    </div>
  )
}

export default Navbar
