import React from 'react';
import Logo from '../images/LastFood.svg';
import { Link } from 'react-router-dom'
import './styles/navbar.css'
import Usuario from './usuario';
class Navbar extends React.Component{
    render()
    {
        return(
            <nav className='flex justify-between items-center h-32 bg-white text-black relative shadow-sm fontStyle'>
                <Link to='/' className='pl-8 justify-end'>
                    <img src={Logo}></img>
                </Link>
                
                <div className='flex justify-items-end pr-8 grid grid-cols-2 gap-20'>
                    <Link className =' buttonS p-8' to='/' > Inicio </Link>
                    
                    <Usuario/>
                </div>
            </nav>
        );
    };
}

export default Navbar;