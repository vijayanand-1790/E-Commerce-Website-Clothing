import React from 'react'
import MidBan from '../assets/MidBan.jpg'

const MidBanner = () => {
  return (
    <div>
      <div className='bg-white md:mt-24 mt-16 md:px-5 px-3'>
        <div className='relative max-w-7xl mx-auto rounded-2xl md:h-[600px] h-[500px] flex justify-center items-center bg-cover bg-center' style={{ backgroundImage: `url(${MidBan})`, backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
          <div className='absolute inset-0 bg-black/50 rounded-2xl flex justify-center items-center'>
            <div className='text-center text-white space-y-4'>
              <h1 className='lg:text-7xl md:text-6xl text-4xl font-bold flex'>All Season Collections</h1>
              <p className='flex justify-center md:text-xl text-sm'>Discover the hottest trends for the seasons. Limited period offer. 20% Off on New Arrivals!</p>
              <button className='bg-red-600 hover:bg-red-400 md:px-5 px-3 md:py-3 py-2 rounded-lg font-bold'>Shop Now</button>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default MidBanner