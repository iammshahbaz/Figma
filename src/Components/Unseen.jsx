import React from 'react'

const Unseen = () => {
    return (
        <div className='flex justify-center items-center px-20'>
            <div className=''>
                <img src="/public/Frame 35.png" alt="" />
            </div>
            <div className='w-1/2 flex flex-col gap-5 items-start pr-4'>
                <h2 className='text-4xl font-semibold text-left text-grey'>The unseen of spending three years at Pixelgrade</h2>
                <p  className='text-textGrey'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                <button className='bg-green p-2 px-5 rounded text-gray-200 font-semibold'>Learn More</button>
            </div>
        </div>
    )
}

const Design = () => {
    return (
        <div className='flex justify-center items-center p-10 px-20'>
            <div>
                <img src="/public/pana.png" alt="" />
            </div>
            <div className='w-1/2 flex flex-col gap-5 items-start pr-4'>
                <h2 className='text-4xl font-semibold text-left text-grey'>How to design your site footer like we did</h2>
                <p className='text-textGrey'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                <button className='bg-green p-2 px-5 rounded text-gray-200 font-semibold'>Learn More</button>
            </div>
        </div>
    )
}

const Para = () => {
    return (
        <div  className='w-full h-96 flex justify-center items-center gap-5 px-20 bg-silver'>
            <div>
                <img src="/public/image 9.png" alt="" />
            </div>
            <div className='w-2/3'>
                <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                <h4 className='text-green text-2xl font-semibold'>Tim Smith</h4>
                <p  className='text-textGrey'>British Dragon Boat Racing Association</p>
                <div className='flex justify-start gap-10 mt-6'>
                    <img src="/public/Logo (1).png" alt="" />
                    <img src="/public/Logo (2).png" alt="" />
                    <img src="/public/Logo (3).png" alt="" />
                    <img src="/public/Logo (4).png" alt="" />
                    <img src="/public/Logo (5).png" alt="" />
                    <img src="/public/Logo (7).png" alt="" />
                    <h4 className='text-green text-lg font-semibold'>Meet all customers</h4>
                </div>
            </div>
        </div>
    )
}


export { Unseen, Design, Para }