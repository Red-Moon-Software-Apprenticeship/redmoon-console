import React from 'react';
import './layout.css';
import AuthHeader from '../AuthHeader';
import AuthProvider from '../AuthProvider';
import Link from 'next/link';

const Header = () => {

  return (
    <header className='flex-around'>
        <Link href='/'>

          <span>
            Red Moon Apprenticeship
          </span>
        </Link>
          <AuthHeader/>
    </header>
  );
};

export default Header;