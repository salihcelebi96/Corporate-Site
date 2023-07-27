import React from 'react';
import logo from "../assets/Connection.svg";

const View = () => {

  return (
    <div className='bg-gray-900 text-white flex justify-center'>
        <div  className='flex flex-col justify-center items-center gap-2'  >
            <div>
                <h3 className='text-sm'>Designed & Developed</h3>
            </div>
            <div>
                <h1 className='text-4xl'>The best practices</h1>
            </div>
            <div>
                <h3 className='text-sm'>Our clients have had the best experience working with us</h3>
            </div>
            <div>
                <button className='border w-36 p-1 hover:bg-blue-900' type="">VIEW PROJECT</button>
            </div>
        </div>
         <div>
      {/* SVG dosyasını <img> etiketi ile göstermek */}
      <img className='h-72' src={logo} alt="Logo" />

      {/* SVG içeriğini JSX içinde göstermek */}
      {/* <svg width="100" height="100" viewBox="0 0 100 100">
        ... SVG içeriği burada olacak ...
      </svg> */}
    </div>
    </div>
   
  );
}

export default View;
