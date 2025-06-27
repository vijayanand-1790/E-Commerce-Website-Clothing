import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { Link } from 'react-router-dom'

const ResponsiveMenu = ({ menuOpen, setmenuOpen }) => {
    return (
        <div className={`${menuOpen? "left-0" : "-left-[100%]"} h-screen w-[75%] border-1 shadow-2xl shadow-gray-400 border-gray-400 bg-white fixed duration-300 z-20 md:hidden top-0 bottom-0 flex px-4 rounded-r-3xl`}>
            <div className='flex flex-col pl-5 pt-5 gap-4'>

                <div>
                    <FaUserCircle size={50} />
                    <div>
                        <h2 className='text-xl font-bold'>Hello User</h2>
                        <p className='text-sm'>Welcome to Better Clothing!</p>
                    </div>
                </div>

                <div className='absolute top-5 right-6 cursor-pointer'>
                    <IoMdClose size={30} onClick={()=>setmenuOpen(!menuOpen)}/>
                </div>

                <div className='flex pt-8'>
                    <ul className='flex flex-col space-y-6 font-bold'>

                        <Link to='/' onClick={()=>setmenuOpen(!menuOpen)}><li>Home</li></Link>
                        <Link to='/mens' onClick={()=>setmenuOpen(!menuOpen)}><li>Mens</li></Link>
                        <Link to='/womens' onClick={()=>setmenuOpen(!menuOpen)}><li>Womens</li></Link>
                        <Link to='/kids' onClick={()=>setmenuOpen(!menuOpen)}><li>Kids</li></Link>
                        <Link to='/login' onClick={()=>setmenuOpen(!menuOpen)}><button className='bg-red-500 px-2 py-0.5 rounded text-white shadow-lg'>Login</button></Link>

                    </ul>
                </div>

            </div>
        </div>
    )
}

export default ResponsiveMenu