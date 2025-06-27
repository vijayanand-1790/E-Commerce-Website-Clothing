import React from 'react'
import Banner from '../assets/WomensBanner.png'
import { useContext } from 'react'
import { ShopContext } from '../ContextToShare/ShopContext'
import Item from '../Components/Item'
import { useEffect } from 'react'

const Womens = () => {

  const { All_products } = useContext(ShopContext);
  const WomensProducts = All_products.filter((product) => product.category === "women")

  useEffect(() => {
      window.scrollTo(0,0)
    }, [])

  return (
    <div className='bg-white md:mt-25 mt-20 py-5 md:mb-22 mb-15'>

      <div className='max-w-7xl mx-auto px-4'>

        <div>
          <img src={Banner} alt="Banner" className='rounded-2xl' />
        </div>

        <h2 className='md:text-3xl text-xl font-bold md:mt-17 mt-10 md:mb-5 mb-3'>Women's Collections</h2>

        <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-x-6 gap-x-3 md:gap-y-6 gap-y-3 px-auto'>

          {
            WomensProducts.map((product) =>
              <Item key={product.id} product={product} />
            )
          }

        </div>

      </div>

    </div>
  )
}

export default Womens