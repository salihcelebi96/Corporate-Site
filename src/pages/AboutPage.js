import React from 'react'
import Nav from "../components/nav"

const AboutPage = () => {
  return (
    <div className='h-screen bg-gray-900'>
      <div>
        <Nav />
      </div>
      <div className='text-white  flex flex-col justify-center items-center h-96'>
        <h1 className='text-2xl'>About us</h1>
         
      </div>

    </div>
  )
}

export default AboutPage
