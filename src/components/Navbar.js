import React from 'react';
import BackgroundVideo from "../videos/secure.mp4";
import { FiAnchor } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='h-screen relative'>
      <video
        autoPlay
        loop
        muted
        className='absolute top-0 left-0 object-cover w-full h-full z-0'
      >
        <source src={BackgroundVideo} type="video/mp4" />
      </video>

      <div className='main h-32 text-black relative z-10'>
        <div className='h-32 flex justify-around items-center '>
          <div className='text-gray-500 text-2xl flex gap-5'>
            <FiAnchor /> {/* FiAnchor icon */}
            <h1 className='text-white text-lg font-thin'>DELTA SECURE</h1>
          </div>

          <div className='flex list-none gap-3'>
            <Link to="/about" className='text-white cursor-pointer transition-colors hover:text-gray-400'>
              About
            </Link>
            <Link to="/pricing" className='text-white cursor-pointer transition-colors hover:text-gray-400'>
              Pricing
            </Link>
            <Link to="/contact" className='text-white cursor-pointer transition-colors hover:text-gray-400'>
              Contact
            </Link>
          </div>
        </div>
        <main className='text-white h-96 justify-center items-center flex flex-col'>
          <div>
            <h1 className='text-6xl flex justify-center'>Your data is secure with us</h1>
            <h3 className='text-lg flex justify-center'>We provide the best security system for clients all over the world</h3>
          </div>
          <div className='mt-4 '>
            <button className='border p-1 px-4 hover:bg-white hover:text-black' type="">Get Started</button>
            <button className='border mx-4 p-1 px-4 hover:bg-white hover:text-black' type="">Find More</button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Navbar;
