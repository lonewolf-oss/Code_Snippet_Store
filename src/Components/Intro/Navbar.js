import React from 'react';
import image from '../Assets/CSSlogo2.png'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar=()=>{

    const user_name=useSelector(state=>state.user_name);

    return(
        <nav className="navbar grid grid-cols-2 gap-4 ">
            <div className="py-3 px-16">
                <img className='w-56 object-cover' src={image} alt='LOGO' />
            </div>
            <div className='nav_links text-center h-28 py-10'>
                <ul className='list-none font-bold text-md text-white '>
                    <li className='home_link inline-block w-1/4'><a href='#' className='inline-block hover:scale-90 transition-scale duration-100'>HOME</a></li>
                    <li className='about_link inline-block w-1/4'><a href='#' className='inline-block hover:scale-90 transition-scale duration-100'>ABOUT</a></li>
                    <li className='inline-block w-1/4'><button className='px-4 py-2 rounded-xl bg-amber-300 text-black hover:bg-amber-400 transition-bg duration-300'>{ !useSelector(state=>state.isLogged)?<Link to='/login'>LOG IN</Link>:<Link to='/userpage'>GO TO DASHBOARD</Link>}</button></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;