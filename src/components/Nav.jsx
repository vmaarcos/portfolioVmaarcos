//Link nextsjs
import Link from "next/link"


//nextHocks 
import { usePathname } from "next/navigation";

//frammer

import {motion} from 'framer-motion';

const links = [
  {path: '/', name: 'home'},
  {path: '/projetos', name: 'meus projetos'},
  {path: '/contato', name: 'meu contato'}
]

const Nav = ({containerStyles, LinkStyles, UnderlineStyles}) => {
  const path = usePathname();
  return ( 
  <nav className={`${containerStyles}`}>
 {links.map((links, index)=> {
  // eslint-disable-next-line react/jsx-key
  return <Link href={links.path} key={index} className={`capitalize ${LinkStyles}`}>
    
    {links.path == path && (
      <motion.span initial={{y: '-100%'}} animate={{y: 0}} 
      transition={{type: 'tween'}}
       layoutId='underline'className={`${UnderlineStyles}`}
      />
    )}
    {links.name}
    </Link>
 })}

  </nav>
  );  
};

export default Nav