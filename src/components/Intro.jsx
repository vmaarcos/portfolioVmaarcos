'use client'

import { useEffect, useState } from "react"
import { ReactTyped } from "react-typed"

const Intro = () => { 
  const [isVisible, setisVisible] = useState(true) 
  useEffect(() => {
    const intervalo = setTimeout(()=> {
      setisVisible(false)
    }, 5000)
    return () => clearTimeout(intervalo)
  }, [])
  return ( 
<div style={{
  display: isVisible ? "flex" : "none"
}} 
className="w-full h-full fixed z-20 top-0 bg-neutral-950 flex justify-center items-center">     
  <div className="bg-stone-900 opacity-100 w-96 h-52 rounded-md flex flex-col justify-center items-start">
    <div className="flex items-center">
      <div className="bg-red-700 rounded-full w-3 h-3 mr-1 ml-2 -mt-3"></div>
      <div className="bg-yellow-400 rounded-full w-3 h-3 mr-1 ml-2 -mt-3"></div>
      <div className="bg-green-600 rounded-full w-3 h-3 mr-1 ml-2 -mt-3"></div>
    </div>   
    <ReactTyped className="ml-24 mb-28 mt-7" strings={["Bem Vindo ao meu Portfolio:ACESS(TRUE)",  "Create by: Marcos Vinicios"]} loop backDelay={800} typeSpeed={35}/>
  </div>  
</div>

  )
}

export default Intro