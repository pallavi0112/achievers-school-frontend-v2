import React from 'react'
import Tag from './Tag'
import CustomizeSlider from './CustomizeSlider'
import facilities from '@/data/facilities'

const Gallery:React.FC = () => {
  return (
    <section className="max-sm:px-[16px] sm:px-[30px] lg:px-[50px] xl:px-[100px] py-[50px]">
    <Tag
    label='Benefits'
    textColor='text-[#5350FF]'
    backgroundColor='bg-[#CAC9FF]'
    />
    <CustomizeSlider
      data = {facilities} 
      header = {"Our Gallery"}
      source = "gallery"
      // variableWidth = {true}
    />
      </section>
  )
}

export default Gallery