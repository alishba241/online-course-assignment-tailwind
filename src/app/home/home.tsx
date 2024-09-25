import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Home() {
    return (
      <div>
        <div className='flex md:flex-row flex-col-reverse justify-between items-center mt-[110px]'>
          <div  className='h-auto md:w-[500px] ml-[35px] md:mt-0 mt-[30px]'>
            <h1 className='md:text-3xl text-2xl font-bold text-white'>Start Your Web Development Journey</h1>
            <p className='mt-6 text-base text-gray-300 font-semibold'>Developers is an online learning platform that offers various web development courses for your skill development.</p>
          <Link href={"/apply"}> <button className='px-6 py-2.5 mt-[60px] mb-[40px] md:mb-0 md:mt-[50px] bg-yellow-400  rounded-xl font-bold hover:bg-yellow-300 transition duration-500 ease-in'>Apply Now</button></Link>
          </div>
         <div className='relative h-auto flex flex-wrap justify-center items-center w-[450px]  bottom-7 '>
            <Image src={"/hero-img3.png"} alt='hero-img' width={450} height={400} />
          </div>
          
        </div>
          
        </div>
  )
}

export default Home
