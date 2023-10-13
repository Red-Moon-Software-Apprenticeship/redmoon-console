"use client"
import React from 'react';
import {signOut} from 'next-auth/react'

const LoggedIn = ({name}) => {

    return (
        <div className='flex-col'>
            <span>Hello {name}</span>            
            <button onClick={()=> signOut()}>
                Sign Out
            </button>
        </div>
      
    );
};

export default LoggedIn;