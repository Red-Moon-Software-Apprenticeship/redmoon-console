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
            {children}
        <Footer/>
    </>
  )
};

export default Layout;