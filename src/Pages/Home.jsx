import React from 'react'
import { Hero } from '../Components/Hero'
import Category from '../Components/Category'
import Popular from '../Components/Popular'
import Footer from '../Components/Footer'


const Home = ({addToCart}) => {
  return (
    <>
      <Hero/>
      <Category/>
      <Popular addToCart={addToCart}/>
      <Footer/>
    </>
  )
}

export default Home