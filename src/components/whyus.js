import React from 'react';
import logo from "../assets/ChartUp.svg";

const whyus = () => {
  return (
    <div className='flex justify-center items-center my-20'>
          <div>
      {/* SVG dosyasını <img> etiketi ile göstermek */}
      <img className='h-72' src={logo} alt="Logo" />

      {/* SVG içeriğini JSX içinde göstermek */}
      {/* <svg width="100" height="100" viewBox="0 0 100 100">
        ... SVG içeriği burada olacak ...
      </svg> */}
    </div>
    <div className='gap-4 flex flex-col mx-7 w-96'>
        <div>
            <h3>Highly reputed brand</h3>
        </div>
        <div>
            <h1 className='text-4xl font-bold'>Why us?</h1>
        </div>
        <div>
            <h3>Our 9 year experience have allowed us to use the most innovative technologies and methodologies</h3>
        </div>
        <div>
            <button className='border-2 rounded-sm border-blue-900 text-blue-900 w-36  text-base hover:bg-blue-900 hover:text-white' type="">VIEW PROJECT</button>
        </div>
    </div>
    </div>
  
  );
}

export default whyus;
