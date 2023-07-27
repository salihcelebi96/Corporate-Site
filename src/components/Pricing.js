import React from 'react';
import pricingData from '../data/PricingData';
import Nav from "./nav";
import { FaHeadphones } from 'react-icons/fa';

const Pricing = () => {
  return (
    <div className='bg-gray-950 min-h-screen'>
      <Nav />

      <div className='text-white relative flex justify-center items-center min-h-screen gap-5 p-4 md:p-8 lg:p-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {pricingData.map((pricing) => (
            <div key={pricing.id} className="card border rounded-lg flex flex-col justify-center bg-gray-800 items-center w-full p-4 shadow-lg shadow-blue">
              <h1 className="text-sm font-bold">{pricing.plan}</h1>
              <p className="text-xl w-full px-5 flex justify-center flex-col items-center font-semibold">{pricing.price}</p>
              <ul className="list-none h-64 flex flex-col">
                {pricing.features.map((feature, index) => (
                  <li key={index} className="mb-2">
                    <FaHeadphones className="inline-block mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-gray-800 hover:bg-gray-700 border-white border-2 text-white font-bold py-2 px-4 rounded mt-4">Get Started</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
