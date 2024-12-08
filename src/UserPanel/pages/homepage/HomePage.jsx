import React from 'react'
import HomeCarousel from '../../components/carousel/HomeCarousel'
import HomeDisplayCarousel from '../../components/carousel/HomeDisplayCarousel'
import Footer from '../../components/footer/Footer'
import { women_kurtis } from '../../data/women_kurtis'
import { mens_shirts } from '../../data/mens_shirts'
import { men_kurtas } from '../../data/mens_kurtas'
const HomePage = () => {
  return (
    <div>
      <HomeCarousel/>
      <div className='space-y-10 py-20 flex flex-col justify-center px-8 lg:px-10'>
        <HomeDisplayCarousel data={women_kurtis} sectionName={"Women's Kurtis"}/>
        <HomeDisplayCarousel data={mens_shirts} sectionName={"Men's Shirts"}/>
        <HomeDisplayCarousel data={men_kurtas} sectionName={"Men's Kurtas"}/>
      </div>
    </div>
  )
}

export default HomePage
