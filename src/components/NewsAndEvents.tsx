import React from 'react'
import CustomizeSlider from './CustomizeSlider'
import news from '@/data/news'
import Tag from './Tag'

const NewsAndEvents: React.FC = () => {
  return (
  <section className="px-[100px] py-[50px]">
  <Tag
  label='New'
  textColor='text-[#FE0000]'
  backgroundColor='bg-[#FFE6E6]'
  />
    <CustomizeSlider
    data = {news} 
    header = {"News And Events"}
    source = "news"
    slidesToShow = {4}
    isNavigationShow = {false}
    isViewAllBtnShow = {true}
    viewAllPageLink = {"/"}
  />
    </section>
  
  )
}

export default NewsAndEvents