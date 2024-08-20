import React from 'react'
import Banner from '../components/Banner'
import Freebook from '../components/Freebook'
import Footer from '../components/footer'
import Navebar from "../components/Navebar"


function Home() {
  return (
    <>
        <Navebar/>
    <Banner/>
    <Freebook/>
    <Footer/>
    </>
  )
}

export default Home