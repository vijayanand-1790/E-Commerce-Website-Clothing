
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Kids from './Pages/Kids'
import Login from './Pages/Login'
import Mens from './Pages/Mens'
import Womens from './Pages/Womens'
import Footer from './Components/Footer'
import SingleProduct from './Components/SingleProduct'

const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar/><Home/><Footer/></>
    },
    {
      path: '/cart',
      element: <><Navbar/><Cart/><Footer/></>
    },
    {
      path: '/kids',
      element: <><Navbar/><Kids/><Footer/></>
    },
    {
      path: '/mens',
      element: <><Navbar/><Mens/><Footer/></>
    },
    {
      path: '/womens',
      element: <><Navbar/><Womens/><Footer/></>
    },
    {
      path: '/login',
      element: <><Navbar/><Login/><Footer/></>
    },

    // below "path & element" meant to link the each clicked product
    // to "SingleProduct.jsx" Component which has product details.

    {
      path: '/products/:productId',
      element: <> <Navbar/><SingleProduct/><Footer/> </>
    }
  ])

const App = () => {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
