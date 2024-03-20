import { Bars3Icon } from '@heroicons/react/24/solid' 
import { useState } from 'react'


function Header(){
    const [menu, setMenu] = useState(false);


    return <>
        <header className="flex justify-between px-5 py-2 bg-secondary ">
            <a className="font-bold text-black" href="/"><strong>Ajay S</strong></a>
            <nav className="hidden md:block">
            <ul className="flex text-white">
                <li ><a href="/"><strong>Home</strong></a></li>
                <li><a href="#about"><strong>about</strong></a> </li>
                <li><a href="#Skills"><strong>Skills</strong></a></li>
                <li><a href="#projects"><strong>projects</strong></a></li>
                <li><a href="#resume"><strong>resume</strong></a></li>
                <li><a href="#contact"><strong>contact</strong></a></li>
            </ul>
            </nav>
            {menu && <nav className="block md:hidden mobile-nav">
            <ul onClick={() => setMenu(!menu)} className="flex flex-col text-white mobile-nav" >
                <li ><a href="/">Home</a></li>
                <li><a href="#about">about</a> </li>
                <li><a href="#Skills">Skills</a></li>
                <li><a href="#projects">projects</a></li>
                <li><a href="#resume">resume</a></li>
                <li><a href="#contact">contact</a></li>
            </ul>
            </nav>}
            <button onClick={()=> setMenu(!menu)} className='block md:hidden'><Bars3Icon className="text-white h-5"/></button>
        </header>
    </>
}

export default Header