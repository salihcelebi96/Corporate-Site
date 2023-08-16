import React from 'react';
import FeaturesData from '../data/FeaturesData';

const Features = () => {
  return (
    <div className="flex flex-col  items-center">
      <h1 className='my-10 font-bold text-4xl'>What We Offer</h1>
      <div className="grid  lg:grid-cols-3 sm:grid-cols-1  md:grid-cols-2  gap-4 justify-center ">
        {FeaturesData.map((feature, index) => (
          <div key={index} className="p-4 border rounded-lg w-96 flex flex-col justify-center items-center shadow-lg">
            <div className={`text-${feature.icon} text-4xl mb-4`}>
             
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{feature.name}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
