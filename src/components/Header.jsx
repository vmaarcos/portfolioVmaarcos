'use client';   
import React, {useState, useEffect} from "react";

//components
import ThemeToggler from "./ThemeToggler";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";



export default function Header() {
    const [header, setHeader] = useState(false);
    const pathname = usePathname();
    useEffect(()=> {
        const scrollYPos = window.addEventListener( 'scroll', ()=> {
            window.scrollY > 50 ? setHeader (true) : setHeader(false);
        });
        //remove

        return ()=> window.removeEventListener('scroll', scrollYPos);
    });

    return(
        <main className={`${header ? 'py-4  shadow-lg dark: bg-accent' : 
        'py-6 dark: bg-transparent' } sticky top-0 z-30 transition-all `}>    
               <div className="flex justify-end" style={{ marginRight: '10px' }}>
                <div className="flex items-center gap-x-6">
                {/*nav */}
                <Nav containerStyles="hidden xl:flex gap-x-8 items-center" 
                LinkStyles="relative hover:text-primary transition-all" 
                UnderlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full" />

            <ThemeToggler />
            {/*nav para celular */}
            <div className="xl:hidden ">
                <MobileNav className='flex'/>
                </div>
            </div>
            </div>
        </main>
    )
}