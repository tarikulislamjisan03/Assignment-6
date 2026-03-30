import React from 'react';
import tools from './Tools.json'
import Toolscard from './Toolscard';

const Toolscards = ({toogle,settoogle,cart,setcart}) => {
   
    return (
        <section className=' max-w-[1200px] mx-auto'>
            <div >
            
       <div className=' grid md:grid-cols-3 grid-cols-1 gap-5 mt-5'>
         {
            tools.map((tool,index)=><Toolscard key={index} cart={cart} setcart={setcart} toogle={toogle} settoogle={settoogle} tool={tool}></Toolscard>)
        }
       </div>
       
        </div>
        </section>
    );
};

export default Toolscards;