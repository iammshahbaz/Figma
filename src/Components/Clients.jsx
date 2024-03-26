import React from 'react'

const Clients = () => {
  return (
    <div className='mt-5 px-20'>
        <div className='flex flex-col  items-center gap-3'>
            <h2 className='text-5xl text-grey font-semibold'>Our Clients</h2>
            <p className='text-textGrey'>We have been working with some Fortune 500+ clients</p>
        </div>
        <div className='flex justify-between mt-6'>
            <img src="/public/Logo (1).png" alt="" />
            <img src="/public/Logo (2).png" alt="" />
            <img src="/public/Logo (3).png" alt="" />
            <img src="/public/Logo (4).png" alt="" />
            <img src="/public/Logo (5).png" alt="" />
            <img src="/public/Logo (7).png" alt="" />
        </div>
    </div>
  )
}

export default Clients