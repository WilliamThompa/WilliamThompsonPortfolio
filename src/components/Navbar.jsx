import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Navbar() { //Navbar sits in an array
    
    const [nav, setNav] = useState(false) //UseState is used as a switch to determine which icon to display

    return(
    <div className='flex justify-between items-center w-full h-20 px-4 text-yellow-400 fixed bg-slate-900 z-20'>
        <div>
            <h1 className='text-5xl font-logo ml-2'>Thompa</h1> {/*logo*/}
        </div>

        <ul className='hidden md:flex' > {/*Tells the nav bar to hide when below 768px*/}
            <li className='px-4 cursor-pointer font-bold font-nav text-xl hover:scale-125 hover:text-yellow-400 duration-500 capitalize text-white'><Link to="/">Home</Link></li>
            <li className='px-4 cursor-pointer font-bold font-nav text-xl hover:scale-125 hover:text-yellow-400 duration-500 capitalize text-white'><Link to="/about">About</Link></li>
            <li className='px-4 cursor-pointer font-bold font-nav text-xl hover:scale-125 hover:text-yellow-400 duration-500 capitalize text-white'><Link to="/projects">Projects</Link></li>
            <li className='px-4 cursor-pointer font-bold font-nav text-xl hover:scale-125 hover:text-yellow-400 duration-500 capitalize text-white'><Link to="/experience">Experience</Link></li>
            <li className='px-4 cursor-pointer font-bold font-nav text-xl hover:scale-125 hover:text-yellow-400 duration-500 capitalize text-white'><Link to="/contact">Contact</Link></li>
        </ul>

        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-white md:hidden'> {/*Tells the hamburger navbar when to appear*/}
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && ( //Using the useState tells the navbar to appear when the hamburger icon is clicked
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950 text-white'>
                <li className='px-4 cursor-pointer capitalize py-6 text-4xl'><Link onClick={() => setNav(!nav)} to='/'>Home</Link></li>
                <li className='px-4 cursor-pointer capitalize py-6 text-4xl'><Link onClick={() => setNav(!nav)} to='/about'>About</Link></li>
                <li className='px-4 cursor-pointer capitalize py-6 text-4xl'><Link onClick={() => setNav(!nav)} to='/projects'>Projects</Link></li>
                <li className='px-4 cursor-pointer capitalize py-6 text-4xl'><Link onClick={() => setNav(!nav)} to='/experience'>Experience</Link></li>
                <li className='px-4 cursor-pointer capitalize py-6 text-4xl'><Link onClick={() => setNav(!nav)} to='/contact'>Contact</Link></li>
            </ul>
    )}
    </div>
  )
}

export default Navbar