'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar(){
    const [toggle, setToggle] = useState(false)

    return(
        <nav className="z-20 mb-1 w-screen h-20 bg-primary-color place-self-center rounded-b-md flex justify-between items-center">
            <Link href={'/'} className="mr-auto flex justify-center items-center hover:cursor-pointer hover:animate-pulse">
                <Image className="ml-4" src={'/plane-ticket.png'} alt='logo' width={44} height={44}/>
                <span className="text-3xl text-center text-slate-300 ml-4 font-Marker">Flyapp</span>
            </Link>
            <button className="md-min:hidden" onClick={()=>{
                setToggle(!toggle)
            }}>
            <Image className="fill-slate-50" src={'/icons/menu_black_36dp.svg'} width={36} height={36} alt='hamburger menu'/>
            </button>
            <div className="flex w-full items-center justify-end md:hidden">
                <div className="bg-secondary-color text-secondary-buttonText rounded-2xl w-1/6 h-5/6 hover:cursor-pointer hover:rounded-lg hover:bg-secondary-hover items-center text-center justify-center flex mx-4 p-2 transition-all duration-300">przycisk1</div>
                <div className="bg-secondary-color text-secondary-buttonText rounded-2xl w-1/6 h-5/6 hover:cursor-pointer hover:rounded-lg hover:bg-secondary-hover items-center text-center justify-center flex mx-4 p-2 transition-all duration-300">przycisk2</div>
                <div className="bg-secondary-color text-secondary-buttonText rounded-2xl w-1/6 h-5/6 hover:cursor-pointer hover:rounded-lg hover:bg-secondary-hover items-center text-center justify-center flex mx-4 p-2 transition-all duration-300">przycisk3</div>
            </div>
            {toggle && 
                <div className="absolute w-2/3 h-2/3 bg-primary-color top-20 right-0 transition-all">
                    <div className="bg-secondary-color text-secondary-buttonText relative rounded-2xl h-1/6 w-5/6 hover:cursor-pointer hover:rounded-lg hover:bg-secondary-hover items-center text-center justify-center flex mx-4 p-2 transition-all duration-300">przycisk1</div>
                    <div className="bg-secondary-color text-secondary-buttonText relative rounded-2xl h-1/6 w-5/6 hover:cursor-pointer hover:rounded-lg hover:bg-secondary-hover items-center text-center justify-center flex mx-4 p-2 transition-all duration-300">przycisk2</div>
                    <div className="bg-secondary-color text-secondary-buttonText relative rounded-2xl h-1/6 w-5/6 hover:cursor-pointer hover:rounded-lg hover:bg-secondary-hover items-center text-center justify-center flex mx-4 p-2 transition-all duration-300">przycisk3</div>
                </div>}
        </nav>
    )
}