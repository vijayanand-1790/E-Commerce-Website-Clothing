import React from 'react'
import B1 from '../assets/b1.jpg'
import B2 from '../assets/b2.jpg'
import B3 from '../assets/b3.jpg'
import B4 from '../assets/b4.jpg'
import B5 from '../assets/b5.jpg'
import B6 from '../assets/b6.jpg'

const MulltiBanner = () => {
  return (
    <div className='bg-white my-2 md:mt-15 mt-8 md:px-5 px-3'>
        <div className='max-w-7xl mx-auto grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 md:px-0 px-4'>
            
            <div className='relative h-[250px] rounded-3xl'>
                <img src={B3} alt="" className='h-full w-full rounded-2xl object-cover'/>
                <div className='absolute flex flex-col justify-center items-center inset-0 bg-black/40 text-white rounded-2xl'>
                    <h2 className='text-3xl font-bold mb-3'>New Arrivals</h2>
                    <button className='md:px-3 px-2 md:py-2 py-1 rounded-lg font-semibold bg-red-500 '>Discover</button>
                </div>
            </div>

            <div className='relative h-[250px] rounded-3xl'>
                <img src={B2} alt="" className='h-full w-full rounded-2xl object-cover'/>
                <div className='absolute flex flex-col justify-center items-center inset-0 bg-black/40 text-white rounded-2xl'>
                    <h2 className='text-3xl font-bold mb-3'>Limited Offer</h2>
                </div>
            </div>

            <div className='relative h-[250px] rounded-3xl col-span-1 sm:col-span-2'>
                <img src={B6} alt="" className='h-full w-full rounded-2xl object-cover'/>
                <div className='absolute flex flex-col justify-center items-center inset-0 bg-black/40 text-white rounded-2xl'>
                    <h2 className='text-3xl font-bold'>Season Sale</h2>
                    <p className='mb-2'>Upto 70% Off</p>
                    <button className='md:px-3 px-2 md:py-2 py-1 rounded-lg font-semibold bg-red-500 '>Discover</button>
                </div>
            </div>

            <div className='relative h-[250px] rounded-3xl col-span-1 sm:col-span-2'>
                <img src={B5} alt="" className='h-full w-full rounded-2xl object-cover'/>
                <div className='absolute flex flex-col justify-center items-center inset-0 bg-black/40 text-white rounded-2xl'>
                    <h2 className='text-3xl font-bold mb-3'>New Trends</h2>
                    <button className='md:px-3 px-2 md:py-2 py-1 rounded-lg font-semibold bg-red-500 '>Discover</button>
                </div>
            </div>

            <div className='relative h-[250px] rounded-3xl'>
                <img src={B4} alt="" className='h-full w-full rounded-2xl object-cover'/>
                <div className='absolute flex flex-col justify-center items-center inset-0 bg-black/40 text-white rounded-2xl'>
                    <h2 className='text-3xl font-bold mb-3'>New Offers</h2>
                </div>
            </div>

            <div className='relative h-[250px] rounded-3xl'>
                <img src={B1} alt="" className='h-full w-full rounded-2xl object-cover'/>
                <div className='absolute flex flex-col justify-center items-center inset-0 bg-black/40 text-white rounded-2xl'>
                    <h2 className='text-3xl font-bold mb-3'>New Arrivals</h2>
                    <button className='md:px-3 px-2 md:py-2 py-1 rounded-lg font-semibold bg-red-500 '>Discover</button>
                </div>
            </div>

        </div>

    </div>
  )
}

export default MulltiBanner