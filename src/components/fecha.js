import React from 'react';
import { Link } from 'react-router-dom'
import "./styles/toggle.css";
import Toggle from './toggle';
import './styles/navbar.css'

const Fecha = ()=>{
    const [toggled,setToggled] = React.useState(false);
    const handleClick = () => {
      setToggled((s)=>!s);
    }
    const currDate= new Date().toLocaleDateString();
   
        return (
            <div className='flex justify-start items-center h-16 bg-white text-black relative gap-4'> 
               <h1 className=' pl-8 font-black fontStyle'> 
               Fecha {currDate}
                </h1>
                <div className=" pl-8 fontStyle flex justify-between items-center gap-4">
                 <h2>Disponibilidad</h2>
                  <Toggle toggled={toggled} onClick={handleClick}/>
                        
    
                    </div>
                </div>
        );
    
}

export default Fecha;
