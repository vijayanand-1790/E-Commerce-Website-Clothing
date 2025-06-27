import React, { useContext } from 'react'
import { ShopContext } from '../ContextToShare/ShopContext'
import Item from '../Components/Item'

const TopSellers = () => {

    const {All_products} = useContext(ShopContext)

  return (
    <div>
        <div className='max-w-7xl mx-auto md:mt-15 mt-13 mb-18 md:px-5 px-3'>
            <div className='md:px-0 px-4 mt-8 mb-10'>
                <h1 className='text-center text-4xl font-bold font-serif'>Top Sellers</h1>
                <p className='text-center flex justify-center px-4 md:font-medium font-normal pt-2'>Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Enim dignissimos magnam, deserunt eius ullam
                    iure sequi voluptates ipsum molestiae ipsam.</p>
            </div>

            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-7 gap-4 md:px-0 px-5'>

                {
                    All_products.slice(0,20).map((product)=>{
                        return <Item key={product.id} product={product} />
                    })
                }

            </div>
        </div>

    </div>
  )
}

export default TopSellers