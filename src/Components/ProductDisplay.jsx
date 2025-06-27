import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../ContextToShare/ShopContext'
import { CiStar } from "react-icons/ci";

const ProductDisplay = (props) => {
  const { product } = props
  const { AddToCart } = useContext(ShopContext);

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 md:my-3 my-0 md:gap-10 px-6 md:px-0'>
      <div className='flex md:1/2 gap-4'>
        <div className='flex flex-col gap-4 md:h-[500px]'>
          <img src={product.image} alt="" className='md:h-[163px] w-[100px]' />
          <img src={product.image2} alt="" className='md:h-[163px] w-[100px]' />
          <img src={product.image1} alt="" className='md:h-[163px] w-[100px]' />
          <img src={product.image3} alt="" className='md:h-[163px] w-[100px]' />
        </div>
        <div>
          <img src={product.image} alt="" className='md:h-[580px]' />
        </div>
      </div>

      <div className='md:1/2 flex flex-col md:mt-0 mt-4'>
        <h2 className='flex text-2xl font-bold'>{product.name}</h2>
        <div className='flex text-xl mt-4 items-center'>
          <CiStar fill='red' />
          <CiStar fill='red' />
          <CiStar fill='red' />
          <CiStar fill='red' />
          <CiStar fill='gray' />
          <h4 className='text-sm'>(122)</h4>
        </div>
        <div className='flex gap-x-3 items-center mt-4'>
          <h4 className='text-xl text-gray-600 line-through'>${product.old_price} </h4>
          <h3 className='text-2xl font-bold text-red-600'>${product.new_price} </h3>
        </div>

        <p className='flex mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore minima natus nemo debitis veritatis saepe, eveniet consequatur. Laudantium, consequatur perspiciatis! Lorem ipsum dolor sit.</p>

        <div className='flex flex-col mt-5'>
          <h4 className='text-xl'>Select Size :</h4>
          <div className='flex gap-2 mt-3'>
            <div className='p-3 text-black bg-gray-200 rounded hover:bg-gray-400 cursor-pointer'>S</div>
            <div className='p-3 text-black bg-gray-200 rounded hover:bg-gray-400 cursor-pointer'>M</div>
            <div className='p-3 text-black bg-gray-200 rounded hover:bg-gray-400 cursor-pointer'>L</div>
            <div className='p-3 text-black bg-gray-200 rounded hover:bg-gray-400 cursor-pointer'>XL</div>
            <div className='p-3 text-black bg-gray-200 rounded hover:bg-gray-400 cursor-pointer'>XXL</div>
          </div>
        </div>

        <Link to='/cart' className='mt-7'>
          <button onClick={()=>AddToCart(product.id)} className='bg-red-600 px-4 py-3 rounded text-white font-bold hover:bg-red-400 cursor-pointer'>ADD TO CART</button>
        </Link>

        <div className='flex flex-col mt-5 gap-y-2'>
          <p className='text-sm'>Category : <span className='text-sm'> Women, T-Shirt, Tops</span></p>
          <p className='text-sm'>Tags : <span className='text-sm'>Modern, Latest</span></p>
        </div>

      </div>
    </div>

  )
}

export default ProductDisplay