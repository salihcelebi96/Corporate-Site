import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai';
import Nav from '../components/nav';



const Ordered = () => {
  return (
    <div className=' h-screen flex flex-col   gap-10'>
        <div  className='w-full bg-gray-900' >
             <Nav/>
        </div>
        <div className=' flex flex-col items-center justify-center '>
        <div>
        <AiOutlineCheckCircle size={90}   color="green" />
        </div>
      <div>
        <h1 className='text-4xl'>Payment Completed</h1>
      </div>
        </div>
        
    </div>
  )
}

export default Ordered
