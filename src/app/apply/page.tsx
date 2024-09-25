import React from 'react'
import Footer from '../footer/page'

function Apply() {
  return (
    <div>
      <div className="font-[500] text-center mt-[50px]">
        <h1 className='md:text-4xl text-3xl text-white pt-[12px]'>Get Enrolled Here</h1>
      </div>
      <div className='h-[20px] w-[200px] mt-[20px] border-t-4 border-t-yellow-400 rounded-t-sm mx-auto'></div>
     <div className='flex justify-center mt-[80px]'>
      <div className='md:h-[570px] h-[530px] md:w-[400px] w-[320px] bg-indigo-200 bg-opacity-20 rounded-xl p-[20px]'>
        <form className=''>
          <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      required
                      className="w-full p-3 md:p-4 mt-[20px] text-white rounded-lg border-2 border-transparent focus:border-yellow-400 outline-none transition duration-300 bg-gray-200 bg-opacity-20"
                    />
            </div>
            <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      required
                      className="w-full p-3 md:p-4 mt-[20px] text-white rounded-lg border-2 border-transparent focus:border-yellow-400 outline-none transition duration-300 bg-gray-200 bg-opacity-20"
                    />
            </div>
            <div>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      className="w-full p-3 md:p-4 mt-[20px] text-white rounded-lg border-2 border-transparent focus:border-yellow-400 outline-none transition duration-300 bg-gray-200 bg-opacity-20"
                    />
                  </div>
            <div>
                    <input
                      type="tel"
                      placeholder="Phone number"
                      required
                      className="w-full p-3 md:p-4 mt-[20px] text-white rounded-lg border-2 border-transparent focus:border-yellow-400 outline-none transition duration-300 bg-gray-200 bg-opacity-20"
                    />
                  </div>
           <div>
               <input
                      type="text"
                      placeholder="Course Name"
                      required
                      className="w-full p-3 md:p-4 mt-[20px] text-white rounded-lg border-2 border-transparent focus:border-yellow-400 outline-none transition duration-300 bg-gray-200 bg-opacity-20"
                    /> 
            </div>
            <div className='flex justify-center'>
            <button type='reset' className='px-12 py-2.5 mt-[60px] bg-yellow-400  rounded-xl font-bold hover:bg-yellow-300 transition duration-500 ease-in'>Submit</button>
         </div>
          </form>
          
     </div>
      </div>

       <Footer/>
    </div>
  )
}

export default Apply
