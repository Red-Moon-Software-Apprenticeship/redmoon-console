import React from 'react';
import './layout.css';
import AuthHeader from '../AuthHeader';
import AuthProvider from '../AuthProvider';
import Link from 'next/link';

const Header = () => {

  return (
    <header>
        <Link href='/'>

          <h1>Red Moon Apprenticeship</h1>
        </Link>
        <AuthProvider>
          <AuthHeader/>
        </AuthProvider>
    </header>
  );
};

export default Header;