"use client"
import React from 'react';
import {signOut} from 'next-auth/react'
import Link from 'next/link';
import "./authheader.css"
const LoggedIn = ({name}) => {

    return (
        <div className='flex-col'>
            <Link href='/my-profile'>
                <span>Hello {name}</span>            
            </Link>
            <button onClick={()=> signOut()} className="auth-button">
                Sign Out
            </button>
        </div>
      
    );
};

export default LoggedIn;
