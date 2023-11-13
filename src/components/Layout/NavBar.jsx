"use client"
import React, {useState, useEffect, useRef} from 'react';
import './layout.css';
import Link from 'next/link';
import RoleLockedNav from './RoleLockedNav';
import AuthProvider from '../AuthProvider';

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const navBarRef = useRef(null)

  const checkIfSticky = () => {
    const top = window.scrollY;

    if(top > navBarRef.current.offsetTop) 
      setIsSticky(true); 
    else
      setIsSticky(false)
  };

  useEffect(() => {
    window.addEventListener('scroll', checkIfSticky);
    
    return () => {
      window.removeEventListener('scroll', checkIfSticky);
    };
  }, []);
  
  
  console.log(window.scrollY)

  return (
    <nav className={`navbar ${isSticky && ' sticky'}`} ref={navBarRef}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link  className="nav-link" href='/'>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link  className="nav-link" href='/about'>
              About Red Moon
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" href='/apprentices/0'>
              Our Apprentices
            </Link>
          </li> */}

          <AuthProvider>
            <RoleLockedNav />
          </AuthProvider>
        </ul>
    </nav>
  );
};

export default NavBar;
