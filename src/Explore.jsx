import React from 'react';

const Explore = () => {
    return (
        <div>
            <div className='bg-purple-700 py-20'>
            <div className='max-w-[1200px] mx-auto text-center text-white space-y-6'>
                
                {/* Title */}
                <h1 className='text-4xl font-bold'>Ready To Transform Your Workflow?</h1>
                
                {/* Description */}
                <p className='text-purple-200'>
                    Join thousands of professionals who are already using Digitools to work smarter. <br />
                    Start your free trial today.
                </p>

                {/* Buttons */}
                <div className='flex justify-center gap-4'>
                    <button className='bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100'>
                        Explore Products
                    </button>
                    <button className='border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700'>
                        View Pricing
                    </button>
                </div>

                {/* Note */}
                <p className='text-purple-200 text-sm'>
                    14-day free trial • No credit card required • Cancel anytime
                </p>

            </div>
        </div>
        </div>
    );
};

export default Explore;