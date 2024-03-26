import React from 'react'

const Caring = () => {
  return (
    <div className='px-20 flex flex-col gap-5 mt-10'>
        <div>
            <h2 className='text-center text-4xl font-semibold text-grey'>Caring is the new marketing</h2>
            <p  className='m-auto mt-3 text-center w-1/2'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
        </div>
        <div className='flex justify-around'>
            <img className='h-80' src="/public/1.png" alt="" />
            <img className='h-80' src="/public/2.png" alt="" />
            <img className='h-80' src="/public/3.png" alt="" />
        </div>
    </div>
  )
}

export default Caring