import React from 'react';
import { FiAnchor, FiFacebook, FiInstagram, FiTwitter, FiYoutube, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
    return (
        <div className=' text-white   flex gap-10 list-none items-center text-sm my-12 bg-gray-950 h-96 justify-center'>
            <div className="flex flex-col gap-3">
                <div className='flex items-center gap-2 '>
                <FiAnchor className='text-xl' /> {/* FiAnchor icon */}
                <h1 className='text-white text-lg font-thin'>DELTA SECURE</h1>
                </div>
            
                <div>
                    
                    <p className='text-sm'>Tantavi caddesi no:7/5 Ümraniye/İstanbul</p>
                    <div className='flex gap-3 mt-3'>
                        <FiFacebook size={24} />
                        <FiInstagram size={24} />
                        <FiTwitter size={24} />
                        <FiYoutube size={24} />
                        <FiLinkedin size={24} />
                    </div>
                </div>
            </div>
            <div className="flex gap-10">
                <div className='gap-1 flex flex-col'>
                    <h1 className='text-xl'>Main</h1>
                    <li>Blog</li>
                    <li>FAQs</li>
                    <li>Support</li>
                    <li>About us</li>
                </div>
                <div className='gap-1 flex flex-col'>
                    <h1 className='text-xl'>Product</h1>
                    <li>Login</li>
                    <li>Personal</li>
                    <li>Business</li>
                    <li>Team</li>
                </div>
                <div className='gap-1 flex flex-col'>
                    <h1 className='text-xl'>Press</h1>
                    <li>Logos</li>
                    <li>Events</li>
                    <li>Stories</li>
                    <li>Office</li>
                </div>
                <div className='gap-1 flex flex-col'>
                    <h1 className='text-xl'>Legal</h1>
                    <li>GDPR</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Disclaimer</li>
                </div>
            </div>
            
            
        </div>
        
    );
}

export default Footer;
