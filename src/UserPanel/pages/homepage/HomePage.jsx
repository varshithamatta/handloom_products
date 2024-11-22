import React from 'react'
import HomeCarousel from '../../components/carousel/HomeCarousel'
import HomeDisplayCarousel from '../../components/carousel/HomeDisplayCarousel'
import Footer from '../../components/footer/Footer'

const HomePage = () => {
  return (
    <div>
      <HomeCarousel/>
      <div className='space-y-10 py-20 flex flex-col justify-center px-8 lg:px-10'>
        <HomeDisplayCarousel sectionName={"Women's Kurtis"}/>
        <HomeDisplayCarousel sectionName={"Men's Shirts"}/>
        <HomeDisplayCarousel sectionName={"Childern's wear"}/>
        <HomeDisplayCarousel sectionName={"Home Decor"}/>
        <HomeDisplayCarousel sectionName={"Accesories"}/>
      </div>
    </div>
  )
}

export default HomePage
