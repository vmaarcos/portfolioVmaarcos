'use client'
import {RiLinkedinBoxFill, RiGithubFill } from 'react-icons/ri';

import Link from 'next/link';

//icons

const icons = [
{
  path: 'https://www.linkedin.com/in/marcos-vinicios-02174b24b/', 
  name: <RiLinkedinBoxFill/>
},
{
  path: 'https://github.com/vmaarcos', 
  name: <RiGithubFill/>
}
]

const Socials = ({containerStyles, iconsStyles}) => {
  return <div className={`${containerStyles}`}> 
  {icons.map((icon, index)=> {
    return <Link href={icon.path} key={index}>
    <div className={`${iconsStyles}`}>
      {icon.name}</div></Link>
  })}
   </div>
}

export default Socials