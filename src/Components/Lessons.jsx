import React from 'react'

const Lessons = () => {
  return (
    <div className='flex justify-between w-full p-20 bg-silver '>
        <div className='flex flex-col justify-center items-start gap-4 w-4/5'>
            <h1 className='text-6xl font-bold text-left text-grey'>Lessons and insights <br/> <span className='text-green'>from 8 years</span></h1>
            <p className='text-textGrey'>Where to grow your business as a photographer: site or social media?</p>
            <button className='bg-green p-2 px-5 rounded text-gray-200 font-semibold'>Register</button>
        </div>
        <div>
            <img className='sm:hidden md:block' src="/public/Illustration.png" alt="" />
        </div>
    </div>
  )
}

export default Lessons