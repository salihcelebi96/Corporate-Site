import React from 'react';
import { Link } from 'react-router-dom';
import { FiAnchor } from 'react-icons/fi';

const Nav = () => {
  return (
    <div className='  '>
      <div className='main h-32 text-white relative z-10  '>
        <div className='h-32 flex justify-around items-center '>
        <Link to="/" className='text-white text-2xl flex gap-5'> {/* Link to Home */}
            <FiAnchor /> {/* FiAnchor icon */}
            <h1 className='text-white text-lg font-thin'>DELTA SECURE</h1>
          </Link>

          <div className='flex list-none gap-3 text-white'>
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
      </div>
    </div>
  );
};

export default Nav;
