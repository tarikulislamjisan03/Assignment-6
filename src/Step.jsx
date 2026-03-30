import React from 'react';
import { User, Package, Rocket } from 'lucide-react';

const Steps = () => {
    return (
        <div className='bg-gray-50 py-16'>
            <div className='max-w-[1200px] mx-auto'>
                
                {/* Title */}
                <div className='text-center mb-12'>
                    <h1 className='text-4xl font-bold mb-3'>Get Started In 3 Steps</h1>
                    <p className='text-gray-500'>Start using premium digital tools in minutes, not hours.</p>
                </div>

                {/* Cards */}
                <div className='grid grid-cols-3 gap-6'>
                    
                    {/* Step 1 */}
                    <div className='bg-white border   border-gray-200 rounded-2xl p-8 relative'>
                        <span className='absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center'>01</span>
                        <div className='bg-purple-100 mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-6'>
                            <User className='text-purple-600' size={28} />
                        </div>
                        <h1 className='text-xl font-bold mb-2 text-center'>Create Account</h1>
                        <p className='text-gray-500 text-sm text-center'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>

                    {/* Step 2 */}
                    <div className='bg-white border border-gray-200 rounded-2xl p-8 relative '>
                        <span className='absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center'>02</span>
                        <div className='bg-purple-100 w-16 h-16 rounded-full  mx-auto flex items-center justify-center mb-6'>
                            <Package className='text-purple-600' size={28} />
                        </div>
                        <h1 className='text-xl font-bold mb-2 text-center'>Choose Products</h1>
                        <p className='text-gray-500 text-sm text-center'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>

                    {/* Step 3 */}
                    <div className='bg-white border  mx-auto border-gray-200 rounded-2xl p-8 relative'>
                        <span className='absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center'>03</span>
                        <div className='bg-purple-100 w-16 mx-auto h-16 rounded-full flex items-center justify-center mb-6'>
                            <Rocket className='text-purple-600' size={28} />
                        </div>
                        <h1 className='text-xl font-bold mb-2 text-center'>Start Creating</h1>
                        <p className='text-gray-500 text-sm text-center'>Download and start using your premium tools immediately.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Steps;