import React from 'react';
import './layout.css';
import Link from 'next/link';
import RoleLockedNav from './RoleLockedNav';
import AuthProvider from '../AuthProvider';

const NavBar = () => {


  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>
            Home
          </Link>
        </li>
        <li>
          <Link href='/'>
            About Red Moon
          </Link>
        </li>
        <li>
          <Link href='/'>
            Our Apprentices
          </Link>
        </li>
        <li>
          <Link href='/'>
            Home
          </Link>
        </li>
        <AuthProvider>
          <RoleLockedNav />
        </AuthProvider>
      </ul>
    </nav>
  )
};

export default NavBar;