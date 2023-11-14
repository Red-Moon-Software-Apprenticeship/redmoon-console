import React from 'react';
import './layout.css';
import AuthHeader from '../AuthHeader';
import Link from 'next/link';

const Header = () => {

  return (
    <header className='flex-between'>
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