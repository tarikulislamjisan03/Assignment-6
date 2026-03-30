import { ShoppingCart } from 'lucide-react';
import React from 'react';

const Navbar = ({cart}) => {
    return (
        <div className='max-w-[1200px] mx-auto'>
             <nav className=' border-blue-400 py-4'>
            <div className=' mx-auto flex justify-between items-center'>
                
                {/* Logo */}
                <h1 className='text-3xl font-bold'>
                    <span className='text-purple-600 italic'>Digi</span>
                    <span className='text-blue-500 italic'>Tools</span>
                </h1>

               {/* Nav Links */}
                <ul className='flex gap-8 text-gray-600'>
                    <li className='cursor-pointer hover:text-purple-600'>Products</li>
                    <li className='cursor-pointer hover:text-purple-600'>Features</li>
                    <li className='cursor-pointer hover:text-purple-600'>Pricing</li>
                    <li className='cursor-pointer hover:text-purple-600'>Testimonials</li>
                    <li className='cursor-pointer hover:text-purple-600'>FAQ</li>
                </ul>

                {/* Right Side */}
                <div className='flex items-center gap-4'>
                  <div className='relative'>
                      {/* Cart Icon */}
                  <ShoppingCart className='text-gray-600'> {cart.length} </ShoppingCart>

                   {/* Count Badge */}
    <span className='absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
        {cart.length}
    </span>
                  </div>
                    <p className='cursor-pointer text-gray-600 hover:text-purple-600'>Login</p>
                    <button className='bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700'>
                        Get Started
                    </button>
                </div>

            </div>
        </nav>
        </div>
    );
};

export default Navbar;