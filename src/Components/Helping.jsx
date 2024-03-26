import React from 'react'

const Helping = () => {
    return (
        <div className='flex justify-around p-10 px-20 w-full bg-silver'>
            <div className='flex flex-col gap-3 justify-center items-center'>
                <h2 className='text-4xl font-semibold text-left text-grey'>Helping a local <br /> <span className='text-4xl font-semibold text-left text-green'> business reinvent itself</span></h2>
                <p>We reached here with our hard work and dedication</p>
            </div>
            <div className='grid grid-cols-2 gap-5 gap-x-10'>
                <div className='flex gap-2'>
                    <div>
                        <img src="/public/Vector.png" alt="" />
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold text-left text-grey'>2,245,341</h2>
                        <p className='text-textGrey'>Members</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div>
                        <img src="/public/Icon (3).png" alt="" />
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold text-left text-grey'>46,328</h2>
                        <p className='text-textGrey'>Clubs</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div>
                        <img src="/public/Icon (4).png" alt="" />
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold text-left text-grey'>828,867</h2>
                        <p className='text-textGrey'>Event Bookings</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div>
                        <img src="/public/Icon (5).png" alt="" />
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold text-left text-grey'>1,926,436</h2>
                        <p className='text-textGrey'>Payments</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Helping