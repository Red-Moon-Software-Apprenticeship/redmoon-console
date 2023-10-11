"use server";
import React from 'react';
import './layout.css';
import NavBar from './NavBar';
import Footer from './Footer';
import Header from './Header';

const Layout = ({children}) => {


  return (
    <>
        <Header/>
        <NavBar/>
          <main className='padding-inline-default'>

            {children}
          </main>
        <Footer/>
    </>
  )
};

export default Layout;