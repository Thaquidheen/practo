import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Header from '../components/header/Header'
import Hero from '../components/hero/Hero'
import Card from '../components/card/Card'

const Home = () => {
  return (
    <div className="home">

        <Navbar/>
        <Header/>
        <Hero/>
        <Card/>
    </div>
  )
}

export default Home