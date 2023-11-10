import React from 'react';
import './layout.css';
import Link from 'next/link';
import RoleLockedNav from './RoleLockedNav';
import AuthProvider from '../AuthProvider';

const NavBar = () => {
  return (
    <nav className="navbar">
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
          <li className="nav-item">
            <Link className="nav-link" href='/apprentices/0'>
              Our Apprentices
            </Link>
          </li>

          <AuthProvider>
            <RoleLockedNav />
          </AuthProvider>
        </ul>
    </nav>
  );
};

export default NavBar;
