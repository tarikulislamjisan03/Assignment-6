import React from 'react';

const Stats = () => {
    return (
        <div className='bg-gradient-to-r from-indigo-600 to-purple-600 py-12 mb-5'>
            <div className='  flex justify-around items-center'>
                
                {/* Active Users */}
                <div className='text-center text-white'>
                    <h1 className='text-4xl font-bold'>50K+</h1>
                    <p className='text-gray-300 mt-2'>Active Users</p>
                </div>

                {/* Divider */}
                <div className='h-12 w-[1px] bg-white opacity-30'></div>

                {/* Premium Tools */}
                <div className='text-center text-white'>
                    <h1 className='text-4xl font-bold'>200+</h1>
                    <p className='text-gray-300 mt-2'>Premium Tools</p>
                </div>

                {/* Divider */}
                <div className='h-12 w-[1px] bg-white opacity-30'></div>

                {/* Rating */}
                <div className='text-center text-white'>
                    <h1 className='text-4xl font-bold'>4.9</h1>
                    <p className='text-gray-300 mt-2'>Rating</p>
                </div>

            </div>
        </div>
    );
};

export default Stats;