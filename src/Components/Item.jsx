import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ product }) => {
  return (
    <div className='rounded-xl hover:scale-105 transition duration-300 cursor-pointer shadow-2xl'>
      <div className='relative mb-2 lg:px-0'>

        <Link to={`/products/${product.id}`}>
          <div onClick={window.scrollTo(0,0)} className='lg:h-80 md:h-70 h-60'>
            <img src={product.image} alt={product.name} className='w-full h-full object-cover object-center rounded-t-xl' />
          </div>
        </Link>



      </div>

      <div className=' flex justify-between items-center px-2 pb-4'>
        <h1 className='max-w-[80%] '> {product.name} </h1>
        <p><span className='bg-red-600 text-white p-1 rounded font-bold'> ${product.new_price} </span></p>

      </div>
    </div>
  )
}

export default Item

// group-hover:scale-105 transition duration-300 cursor-pointer