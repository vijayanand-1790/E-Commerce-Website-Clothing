import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { IoMdClose } from "react-icons/io";
import { LuMenu } from "react-icons/lu";
import ResponsiveMenu from './ResponsiveMenu';
import { ShopContext } from '../../ContextToShare/ShopContext';
import BetterLogo from './../../assets/BetterClothing.png'

const Navbar = () => {

  const [menuOpen, setmenuOpen] = useState(false)

  const {getTotalCartItem} = useContext(ShopContext)

  const toggleMenu = () => {
    setmenuOpen(!menuOpen)
  }

  return (
    <div className='w-full z-50 fixed top-0 bg-white border-neutral-400 shadow-lg'>
      <div className='max-w-7xl px-4 mx-auto flex py-2 justify-between items-center'>

        <Link to='/'><img src={BetterLogo} alt="" className='md:w-35 w-25 bg-black rounded-xl my-1' /></Link>

        <nav className='md:flex hidden gap-6 text-xl'>
          <ul className='flex lg:gap-x-12 md:gap-x-8'>

            <Link to='/'><li>Home</li></Link>
            <Link to='/mens'><li>Mens</li></Link>
            <Link to='/womens'><li>Womens</li></Link>
            <Link to='/kids'><li>Kids</li></Link>
            <Link to='/login'><button className='bg-red-500 px-2 py-0.5 rounded text-white shadow-lg cursor-pointer'>Login</button></Link>

          </ul>

        </nav>

        <div className='flex gap-7'>
          <Link to='/cart' className='relative flex'>
            <FaShoppingCart size={25} />
            <div className='bg-red-500 absolute w-4 h-4 flex justify-center items-center text-white rounded-full -top-2 -right-2 text-sm font-bold'>{getTotalCartItem()}</div>
          </Link>

          <div className='md:hidden'>
            {menuOpen ? <IoMdClose onClick={toggleMenu} size={25} className='cursor-pointer' /> : <LuMenu onClick={toggleMenu} size={25} className='cursor-pointer' />}
          </div>
        </div>

      </div>

      <ResponsiveMenu menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>

    </div>
  )
}

export default Navbar