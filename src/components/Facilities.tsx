import React from 'react'
import CustomizeSlider from './CustomizeSlider'
import facilities from '@/data/facilities'
import Tag from './Tag'

const Facilities = () => {
  return (
    <>
    <section className="max-sm:px-[10px] sm:px-[30px] lg:px-[50px] xl:px-[100px] py-[50px]">
    <Tag
    label='Benefits'
    textColor='text-[#01A100]'
    backgroundColor='bg-[#E6F6E6]'
    />
    <CustomizeSlider
      data = {facilities} 
      header = {"Facilities in Our School"}
      source = "facility"
    />
      </section>
    </>
  )
}

export default Facilities