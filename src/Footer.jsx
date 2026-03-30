import React from 'react';
import { BsTwitter, BsYoutube } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className='bg-gray-900 text-gray-400 py-16'>
            <div className='max-w-[1200px] mx-auto'>
                
                {/* Top Section */}
                <div className='grid grid-cols-5 gap-10 mb-12'>

                    {/* Logo & Description */}
                    <div className='col-span-1'>
                        <h1 className='text-2xl font-bold text-white mb-3'>DigiTools</h1>
                        <p className='text-sm'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>

                    {/* Product */}
                    <div>
                        <h1 className='text-white font-semibold mb-4'>Product</h1>
                        <ul className='space-y-3 text-sm'>
                            <li className='hover:text-white cursor-pointer'>Features</li>
                            <li className='hover:text-white cursor-pointer'>Pricing</li>
                            <li className='hover:text-white cursor-pointer'>Templates</li>
                            <li className='hover:text-white cursor-pointer'>Integrations</li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h1 className='text-white font-semibold mb-4'>Company</h1>
                        <ul className='space-y-3 text-sm'>
                            <li className='hover:text-white cursor-pointer'>About</li>
                            <li className='hover:text-white cursor-pointer'>Blog</li>
                            <li className='hover:text-white cursor-pointer'>Careers</li>
                            <li className='hover:text-white cursor-pointer'>Press</li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h1 className='text-white font-semibold mb-4'>Resources</h1>
                        <ul className='space-y-3 text-sm'>
                            <li className='hover:text-white cursor-pointer'>Documentation</li>
                            <li className='hover:text-white cursor-pointer'>Help Center</li>
                            <li className='hover:text-white cursor-pointer'>Community</li>
                            <li className='hover:text-white cursor-pointer'>Contact</li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h1 className='text-white font-semibold mb-4'>Social Links</h1>
                        <div className='flex gap-3'>
                            <div className='bg-gray-700 p-2 rounded-full hover:bg-gray-600 cursor-pointer'>
                                <BsYoutube size={18} className='text-white' />
                            </div>
                            <div className='bg-gray-700 p-2 rounded-full hover:bg-gray-600 cursor-pointer'>
                                <FaFacebook size={18} className='text-white' />
                            </div>
                            <div className='bg-gray-700 p-2 rounded-full hover:bg-gray-600 cursor-pointer'>
                                <BsTwitter size={18} className='text-white' />
                            </div>
                        </div>
                    </div>

                </div>

                {/* Divider */}
                <div className='border-t border-gray-700 pt-6 flex justify-between items-center text-sm'>
                    <p>© 2026 Digitools. All rights reserved.</p>
                    <div className='flex gap-6'>
                        <span className='hover:text-white cursor-pointer'>Privacy Policy</span>
                        <span className='hover:text-white cursor-pointer'>Terms of Service</span>
                        <span className='hover:text-white cursor-pointer'>Cookies</span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;