import React from 'react'

const Navbar = () => {
  return (
    <div className='flex w-full justify-between bg-silver px-20 items-center pt-5'>
        <div>
            <img src="/public/Logo.png" alt="" />
        </div>
        <div className='flex justify-around gap-10 text-grey font-semibold'>
            <a href="">Home</a>
            <a href="">Service</a>
            <a href="">Feature</a>
            <a href="">Product</a>
            <a href="">Testimonial</a>
            <a href="">FAQ</a>
        </div>
        <div className='flex gap-4'>
            <button className='bg-silver p-2 px-5 rounded text-green font-semibold'>Login</button>
            <button className='bg-green p-2 px-5 rounded text-gray-200 font-semibold'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar