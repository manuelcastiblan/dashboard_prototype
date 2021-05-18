import React from 'react';
import '../index.css';
import './styles/usuarios.css';
import logo from './images/logomc.svg';
function Usuario (){
return(
    <div className='grid grid-cols-2 gap-2 place-content-center'>
         <div className='grid grid-cols-5 gap-2'>
             <div className='col-span-1'>
                 <img src={logo}></img>
             </div>
             <div className='col-span-3 flex flex-col fontUsr'>
                 <div className='font-black'>
                     McDonald's Laureles
                 </div> 
                 <div>
                     Calle 32F #76-86
                 </div>
             </div>
             <div className='col-span-1 '>
             <svg width="1" height="43" viewBox="0 0 1 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.5" x2="0.5" y2="43" stroke="#122F32"/>
            </svg>
             </div>
         </div>
       
         <div className='grid grid-cols-4 gap-1'>
            
             <div className='col-span-3 flex flex-col fonUsr text-justify'>
                 <div className='font-black'>
                     Ilaria Palomba
                 </div> 
                 <div>
                     Restaurant Manager
                 </div>
             </div>
                <div className='flex flex-col '>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" fill="currentColor">
                 <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </div>
         </div>
    </div>
   

)

}
export default Usuario;