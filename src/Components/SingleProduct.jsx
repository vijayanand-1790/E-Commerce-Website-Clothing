import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../ContextToShare/ShopContext';
import ProductDisplay from './ProductDisplay';
import DescriptionBox from './DescriptionBox';
import NewCollections from '../Components/NewCollections'


const SingleProduct = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { All_products } = useContext(ShopContext)
  const { productId } = useParams();
  const product = All_products.find((e) => e.id === Number(productId))

  return (
    <div className='max-w-7xl mx-auto md:mt-20 mt-10 mb-30 py-10'>

      <ProductDisplay product={product} />
      <DescriptionBox />
      <NewCollections />

    </div>
  )
}

export default SingleProduct