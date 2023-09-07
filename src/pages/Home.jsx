import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Header from '../components/header/Header'
import Hero from '../components/hero/Hero'
import Card from '../components/card/Card'
import Ads from '../components/ads/Ads'
import Carousel1 from '../components/carousel/Carousel1'
import Down from '../components/down/Down'
import Footer from '../components/footer/Footer'



const Home = () => {
  return (
    <div className="home">
        <Navbar/>
        <Header/>
         <Hero/>
        <Card/>
        <Ads/>
        <Carousel1/>
        <Down/>
        <Footer/>
    </div>
  )
}

export default Home