import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
    
    return(
        <nav className="z-20 mb-1 w-screen h-20 bg-slate-900 place-self-center rounded-b-md flex justify-around items-center">
            <Link href={'/'} className="mr-auto flex justify-center items-center hover:cursor-pointer hover:animate-pulse">
                <Image className="ml-4" src={'/plane-ticket.png'} alt='logo' width={44} height={44}/>
                <span className="text-3xl text-center text-slate-300 ml-4 font-Marker">Flyapp</span>
            </Link>
            <div className="bg-slate-100 rounded-lg w-1/6 h-5/6 items-center text-center justify-center flex mx-4 hover:rounded-2xl transition-all duration-300">przycisk1</div>
            <div className="bg-slate-100 rounded-lg w-1/6 h-5/6 items-center text-center justify-center flex mx-4 hover:rounded-2xl transition-all duration-300">przycisk2</div>
            <div className="bg-slate-100 rounded-lg w-1/6 h-5/6 items-center text-center justify-center flex mx-4 hover:rounded-2xl transition-all duration-300">przycisk3</div>
        </nav>
    )
}