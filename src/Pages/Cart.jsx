import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../ContextToShare/ShopContext'
import EmptyCart from '../assets/EmptyCart.png'
import { Link } from 'react-router-dom'
import { IoIosClose } from "react-icons/io";


const Cart = () => {

  const { All_products, cartItems, RemoveFromCart, getTotalCartAmount, getTotalCartItem } = useContext(ShopContext)

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div className='md:mt-35 mt-20 mb-20'>

      <div className='max-w-7xl mx-auto'>

        {getTotalCartItem() === 0 ? (
          <div className='flex flex-col justify-center items-center'>
            <h1 className='flex justify-between items-center md:text-3xl text-2xl font-bold'>Your Cart Is Empty!</h1>
            <img src={EmptyCart} alt="empty" />
          </div>
        ) :
          (
            <div>

              <div className='grid grid-cols-4 md:grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] px-4 '>
                <p className='font-bold'>Products</p>
                <p className='font-bold'>Name</p>
                <p className='md:block hidden font-bold'>Price</p>
                <p className='md:block hidden font-bold'>Quantity</p>
                <p className='md:block font-bold'>Total</p>
                <p className='md:block font-bold'>Remove</p>
              </div>
              <hr className='border-1 border-gray-300 mt-2' />

              {
                All_products.map((e) => {
                  if (cartItems[e.id] > 0) {
                    return (

                      <div key={e.id} className='grid grid-cols-4 md:grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] px-4 space-y-2 items-center mt-2 border-b-1 border-b-gray-300'>

                        <img src={e.image} className='w-15 h-16 bg-cover' alt="image" />
                        <p className='flex pr-8 md:text-base text-sm'> {e.name} </p>
                        <p className='md:block hidden'> ${e.new_price} </p>
                        <p className='md:block hidden'> {cartItems[e.id]} </p>
                        <p className='md:block'> ${e.new_price * cartItems[e.id]} </p>
                        <IoIosClose onClick={() => RemoveFromCart(e.id)} size={30} className='md:block cursor-pointer hover:text-red-500' />

                      </div>

                    )
                  }
                  else return null
                }
                )
              }

              <div className='flex md:flex-row flex-col justify-between md:mt-15 mt-8 md:gap-x-20'>
                <div className='flex flex-1 flex-col px-4'>
                  <h2 className='text-xl font-bold'>Cart Totals</h2>
                  <div className='flex justify-between mt-4 border-b-2 border-b-gray-200 pb-3'>
                    <p>Sub Total</p>
                    <p>${getTotalCartAmount()} </p>
                  </div>
                  <div className='flex justify-between mt-4 border-b-2 border-b-gray-200 pb-3'>
                    <p>Shipping Fee</p>
                    <p>Free</p>
                  </div>
                  <div className='flex justify-between mt-4 border-b-2 border-b-gray-200 pb-3'>
                    <p>Total</p>
                    <p className='font-bold'>${getTotalCartAmount()} </p>
                  </div>

                  <Link to='/login'>
                    <button className='flex w-fit px-5 py-2 mt-8 rounded-lg bg-red-500 shadow-lg shadow-gray-500 text-white font-bold cursor-pointer hover:bg-red-600'>Proceed to checkout</button>
                  </Link>

                </div>

                <div className='flex flex-1 px-4 md:mt-0 mt-7'>
                  <div className='flex flex-col justify-center items-center'>

                    <p className='mb-1'>If You Have a PromoCode Enter Here:</p>

                    <div className='flex mt-2'>
                      <input type="text" className='bg-blue-200 p-1 rounded-l-xl pl-4' placeholder='Promo Code' name="" id="" />
                      <button className='bg-green-600 text-white px-2 py-1 rounded-r-xl focus:outline-none hover:bg-green-800 transition duration-300 cursor-pointer'>Submit</button>
                    </div>



                  </div>
                </div>

              </div>

            </div>
          )}

      </div>


    </div>
  )
}

export default Cart