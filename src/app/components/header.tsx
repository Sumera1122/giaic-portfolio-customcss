"use client"
import Link from 'next/link'
import "../styles/header.css"
import React from 'react'

const Header = () => {
  return (
     <div className='container'>

    <div className="navbar">
        <div className="logo">
            <h1>P<span>ortfolio.</span></h1>
        </div>
        <div className="links">
          <ul>
            <li><Link href={"/" } className="home">Home</Link></li>
            <li><Link href={"/about" }>About</Link></li>
            <li><Link href={"/skills"}>Skills</Link></li>
            <li><Link href={"/contact"}>Contact</Link></li>
          </ul>
        
          
        </div>
      
    </div>
     </div>
  );
} 
export default Header