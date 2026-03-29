import { Import, PlayCircle } from 'lucide-react';
import React from 'react';
import banner from '../B13-A6-DigiTools-Platform/assets/banner.png'

const Banner = () => {
    return (
        <div className=' flex justify-between items-center py-20 max-w-[1200px] mx-auto'>
            
            {/* Left Side */}
            <div className='w-1/2 space-y-6'>
                
                {/* Badge */}
                <div className='inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium'>
                    <span className='w-2 h-2 bg-purple-600 rounded-full'></span>
                    New: AI-Powered Tools Available
                </div>

                {/* Heading */}
                <h1 className='text-6xl font-bold text-gray-900 leading-tight'>
                    Supercharge Your Digital Workflow
                </h1>

                {/* Description */}
                <p className='text-gray-500 text-lg'>
                    Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
                </p>

                {/* Buttons */}
                <div className='flex gap-4'>
                    <button className='bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700'>
                        Explore Products
                    </button>
                    <button className='border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:border-purple-600 hover:text-purple-600'>
                        <PlayCircle></PlayCircle> Watch Demo
                    </button>
                </div>
            </div>

            {/* Right Side - Image */}
            <div className='w-1/2 flex justify-end'>
                <img 
                    src={banner}
                />
            </div>

        </div>
    );
};

export default Banner;