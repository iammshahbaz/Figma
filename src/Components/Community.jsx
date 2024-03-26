import React from 'react'

const Community = () => {
  return (
    <div className='p-20'>
        <div className='flex flex-col justify-center items-center text-center'>
            <h2 className='text-5xl text-grey font-semibold mb-2'>Manage your entire community <br/>in a single system</h2>
            <p className='text-textGrey'>Who is Nextcent suitable for?</p>
        </div>
        <div className='flex gap-24 justify-center items-center'>
            <div className='flex flex-col p-5 gap-3 text-center'>
                <div className='flex flex-col justify-center items-center px-10 gap-5'>
                    <img src="/public/Icon.png" alt="" />
                    <h2 className='text-2xl text-grey font-semibold'>Membership Organisations</h2>
                </div>
                <div>
                    <p className='text-textGrey'>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
            </div>
            <div className='flex flex-col p-5 gap-3 text-center'>
                <div className='flex flex-col justify-center items-center px-10 gap-5'>
                    <img src="/public/Icon (1).png" alt="" />
                    <h2 className='text-2xl text-grey font-semibold'>National Associations</h2>
                </div>
                <div>
                    <p className='text-textGrey'>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
            </div>
            <div className='flex flex-col p-5 gap-3 text-center'>
                <div className='flex flex-col justify-center items-center px-10 gap-5'>
                    <img src="/public/Icon (2).png" alt="" />
                    <h2 className='text-2xl text-grey font-semibold'>Clubs And Groups</h2>
                </div>
                <div>
                    <p className='text-textGrey'>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Community