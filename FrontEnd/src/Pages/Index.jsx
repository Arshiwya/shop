import React from 'react'
import Navbar from '../Components/Header/Navbar'
import SliderIndex from '../Components/Slider/SliderIndex'
import SectionHeader from '../Components/SectionHeader/SectionHeader'

export default function Index() {
  return (
    <>
    <Navbar/>
    <div className="container">
    <SliderIndex/>
    <SectionHeader
    title={'پر فروش ترین ها'}
    btnTitle={'مشاهده همه'}
    />
    </div>
    </>
  )
}
