import React from 'react';
import Cart from './Cart';
import { toast } from 'react-toastify';

const Carts = ({cart,setcart}) => {
    const handlecheckout=()=>{
        setcart([])
        toast('Proceed To Checkout')
    }

let total=0;
        for (const sum of cart) {
            total=total+sum.price
        }
    return (
        

        <div className='max-w-[1200px] mx-auto mt-10 border border-gray-200 rounded-2xl p-6 space-y-5'>
            
            {/* Title */}
            <h1 className='text-xl font-bold mb-4'>Your Cart</h1>
            
            {cart.length === 0 
                ? <p className='text-center text-gray-500 py-10'>Cart is Empty!</p>
                : <>
                    {cart.map((crt, index) => <Cart key={index} crt={crt} />)}

                    {/* Total */}
                    <div className='flex justify-between items-center mt-4'>
                        <p className='text-gray-500'>Total:</p>
                        <p className='text-2xl font-bold'>${total} </p>
                    </div>

                    {/* Checkout Button */}
                    <button onClick={()=>handlecheckout()} className='w-full bg-purple-600 text-white py-3 rounded-full font-semibold mt-4 hover:bg-purple-700'>
                        Proceed To Checkout
                    </button>
                </>
            }

        </div>
    );
};

export default Carts;