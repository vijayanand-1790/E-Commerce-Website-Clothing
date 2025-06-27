
import HeroBanner from '../Components/HeroBanner'
import MultiBanner from '../Components/MulltiBanner'
import NewCollections from '../Components/NewCollections'
import MidBanner from '../Components/MidBanner'
import TopSellers from '../Components/TopSellers'
import Features from '../Components/Features'
import { useEffect } from 'react'

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <HeroBanner />
      <MultiBanner />
      <NewCollections />
      <MidBanner />
      <TopSellers />
      <Features />
    </>
  )
}

export default Home