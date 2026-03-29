import React from 'react';

const Cart = ({crt}) => {
    console.log(crt)
    return (
        <div>
             <div className=''>
            <div className='border  border-gray-200 rounded-2xl p-6'>
                
                

                {/* Cart Item 1 */}
                <div className='flex items-center justify-between  bg-gray-50 rounded-xl p-4 mb-3'>
                    <div className='flex items-center gap-4'>
                        <div className='bg-white p-2 rounded-lg text-2xl'>✍️</div>
                        <div>
                            <h1 className='font-semibold'> {crt.name} </h1>
                            <p className='text-gray-500 text-sm'>${crt.price} </p>
                        </div>
                    </div>
                    <button className='text-red-500 font-semibold'>Remove</button>
                </div>



            </div>
        </div>
        </div>
    );
};

export default Cart;