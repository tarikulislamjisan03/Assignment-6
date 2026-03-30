import React, { useState } from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Stats from './Stats';

import Toolscards from '../Toolscards';
import Carts from './Carts';
import { ToastContainer } from 'react-toastify';
import Steps from './Step';
import Pricing from './Pricing';
import Explore from './Explore';
import Footer from './Footer';





const App = () => {
  const [toogle,settoogle]=useState(true)
  const [cart,setcart]=useState([])
  return (
    <section className=' p-4  mx-auto'>
      <div >
        {/* components */}
     <Navbar cart={cart} setcart={setcart}> </Navbar>
     <Banner> </Banner>
     <Stats></Stats>
     <div>
        <div className=' space-y-5 '>
            <h1 className='text-4xl font-bold text-center '>Premium Digital Tools</h1>
            <p className='text-gray-500 text-center'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
        </div>
        {/* toogle */}
        <div className='flex justify-center gap-5 mt-5'>
            <div onClick={()=>settoogle(true)} className={`${toogle===true ? 'bg-purple-500 text-white' : ''} px-8 py-1  rounded-lg text-black font-semibold border`}>
        <button>Products</button>
            </div>
            <div className={`${toogle===true ? '' : 'bg-purple-500 text-white'} px-8 py-1  rounded-lg text-black font-semibold border`} onClick={()=>settoogle(false)}>
        <button>Cart({cart.length}) </button>
            </div>
        </div>
            </div>
            {
              toogle === true ? <Toolscards toogle={toogle} cart={cart} setcart={setcart} toogle={toogle} settoogle={settoogle}></Toolscards>: <Carts cart={cart} setcart={setcart}></Carts>
            }
     
    
    </div>
    <ToastContainer></ToastContainer>
    <Steps></Steps>
    <Pricing></Pricing>
    <Explore></Explore>
    <Footer></Footer>
    </section>
  );
};

export default App;