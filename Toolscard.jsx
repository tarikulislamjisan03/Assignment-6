import React from 'react';
import { toast } from 'react-toastify';

const Toolscard = ({tool,cart,setcart}) => {

    const handlebuynowbtn=()=>{
        console.log('clicked')
        setcart([...cart,tool])
        toast('Added to Cart')
    }
    return (
        <div>
            <div>
                  <div className='border border-gray-200 rounded-2xl p-6 shadow-sm relative'>
            
            {/* Tag */}
            <div className={`absolute top-4 right-4 ${tool.tag=== 'Best Seller' ? 'text-yellow-600 bg-yellow-200' : tool.tag === 'New' ? 'bg-green-600 text-green-200' : 'bg-purple-200  text-purple-600 ' }  text-xs font-semibold px-3 py-1 rounded-full`}>
                {tool.tag}
            </div>

            {/* Icon */}
            <div className='text-4xl mb-4'> {tool.icon} </div>

            {/* Name */}
            <h1 className='text-xl font-bold text-gray-900 mb-2'> {tool.name} </h1>

            {/* Description */}
            <p className='text-gray-500 text-sm mb-4'>
                {tool.description}
            </p>

            {/* Price */}
            <div className='mb-4'>
                <span className='text-3xl font-bold text-gray-900'>${tool.price}</span>
                <span className='text-gray-500 text-sm'>/{tool.period}</span>
            </div>

            {/* Features */}
            <ul className='space-y-2 mb-6'>
                <li className='flex items-center gap-2 text-sm text-gray-600'>
                    <span className='text-purple-600'>✔</span> {tool.features[0]}
                </li>
                <li className='flex items-center gap-2 text-sm text-gray-600'>
                    <span className='text-purple-600'>✔</span> {tool.features[1]}
                </li>
                <li className='flex items-center gap-2 text-sm text-gray-600'>
                    <span className='text-purple-600'>✔</span> {tool.features[2]}
                </li>
            </ul>

            {/* Button */}
            <button onClick={()=>handlebuynowbtn()} className='w-full bg-purple-600 text-white py-3 rounded-full font-semibold hover:bg-purple-700'>
                Buy Now
            </button>

        </div>
            </div>
        </div>
    );
};

export default Toolscard;