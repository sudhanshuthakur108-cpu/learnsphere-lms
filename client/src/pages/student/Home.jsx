import React from 'react'

import Hero from '../../components/students/Hero'
import Companies from '../../components/students/Companies'
import CoursesSection from '../../components/students/CoursesSection'
import TestimonialsSection from '../../components/students/TestimonialsSection'
import CallToAction from '../../components/students/CallToAction'
import Footer from '../../components/students/Footer'

const Home = () => {

  return (

    <div className='flex flex-col items-center text-center'>

      <Hero />

      <Companies />

      <CoursesSection />

      <TestimonialsSection />

      <CallToAction />

      <Footer />

    </div>

  )

}

export default Home