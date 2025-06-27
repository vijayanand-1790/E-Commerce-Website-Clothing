import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitterSquare } from 'react-icons/fa'
import BetterClothing from '../assets/BetterClothing.png'

const Footer = () => {
    return (
        <footer className='bg-black text-white pt-16'>
            <div className='max-w-7xl mx-auto px-4 md:flex md:justify-between'>

                <div className='md:mb-0 mb-8'>
                    <Link to='/'>
                        <img src={BetterClothing} alt="Logo" className='md:w-35 w-25 mb-5' />
                    </Link>
                    <div className='md:space-y-2 space-y-1'>
                        <p className='text-sm font-semibold'>High Quality Sustainable Clothing</p>
                        <p className='text-sm'>123, Fashion Street, Style City, New York 100001.</p>
                        <p className='text-sm'>Email: support@mooi.com</p>
                        <p className='text-sm'>Phone: (123) 456 7890</p>
                    </div>

                </div>

                <div className='md:mb-0 mb-8'>
                    <h2 className='md:text-lg text-base font-bold'>Customer Service</h2>
                    <ul className='md:mt-3 mt-0 md:space-y-2 space-y-1'>
                        <li className='text-sm'>Contact Us</li>
                        <li className='text-sm'>Shipping & Return</li>
                        <li className='text-sm'>FAQs</li>
                        <li className='text-sm'>Order Tarcking</li>
                        <li className='text-sm'>Size Guide</li>
                    </ul>
                </div>

                <div className='md:mt-0'>
                    <h2 className='md:text-lg text-base font-bold'>Follow Us</h2>
                    <div className='flex md:gap-4 gap-3 mt-2'>
                        <FaFacebook />
                        <FaInstagram />
                        <FaTwitterSquare />
                        <FaPinterest />
                    </div>

                </div>

                <div className='md:mt-0 mt-8'>
                    <h2 className='md:text-lg text-base font-bold'>Stay in the loop</h2>
                    <p className='text-sm mt-2'>Subscribe to get special offers, free giveaways and more</p>
                    <form action="" className='flex mt-3'>
                        <input type="email" className='w-full text-white p-2 bg-gray-600 focus:outline-none rounded-l-md' placeholder='Enter your email' />
                        <button className='bg-red-600 px-5 rounded-r-md text-sm'>Submit</button>
                    </form>
                </div>

            </div>

            <div className='border-t mt-8 text-center'>
                <p className='text-sm py-4'> &copy; {new Date().getFullYear()} - BetterClothing. All Rights Reserved. </p>
            </div>
        </footer>
    )
}

export default Footer