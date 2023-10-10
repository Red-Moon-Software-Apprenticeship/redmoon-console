import React from 'react';
import './layout.css';
import AuthHeader from '../AuthHeader';
import AuthProvider from '../AuthProvider';

const Header = () => {

  return (
    <header>
        <h1>Red Moon Apprenticeship</h1>
        <AuthProvider>
          <AuthHeader/>
        </AuthProvider>
    </header>
  );
};

export default Header;