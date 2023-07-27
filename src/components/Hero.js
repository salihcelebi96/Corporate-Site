import React from 'react';
import logo from "../assets/Deal.svg";

const Hero = () => {
  return (
    <div className='flex mt-10 justify-center  '>
        <div>
      {/* SVG dosyasını <img> etiketi ile göstermek */}
      <img className='h-72' src={logo} alt="Logo" />

      {/* SVG içeriğini JSX içinde göstermek */}
      {/* <svg width="100" height="100" viewBox="0 0 100 100">
        ... SVG içeriği burada olacak ...
      </svg> */}
    </div>
    <div  className='flex flex-col  justify-center mx-7'>
         <div>
        <h3>founded in 2012</h3>
        <h1>We've been in business for 9 years</h1>
        <h3>We have designed and implemented the best cloud security solutions</h3>
    </div>
    <div className='flex my-5 '>
        <button className='border-2 border-blue-900 p-2 rounded-md px-3 text-blue-900 text-lg hover:text-white hover:bg-blue-950' type="">FIND MORE</button>
    </div>
    </div>
   
    </div>
    
  );
}

export default Hero;
