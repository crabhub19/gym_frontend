import React from 'react'

export default function Home() {
  return (
    <main className='min-h-screen bg-home-page-image bg-fixed bg-cover bg-top'>
      <div className="flex flex-col justify-center  min-h-[900px] pl-4 sm:pl-12 md:pl-28 gap-5">
        <h1 data-aos="slide-right" data-aos-duration="1800" data-aos-easing="ease-out-back" className='text-4xl md:text-7xl font-lovelo text-white'>Hi! You Are Welcome</h1>
        <h1 data-aos="slide-right" data-aos-delay="400" data-aos-duration="1800" data-aos-easing="ease-out-back" className='text-white text-6xl md:text-9xl font-RubikWetPaint uppercase'>GYM Center</h1>
        <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className='secondary-btn w-fit'>Our Courses</button>
      </div>
    </main>
  )
}
