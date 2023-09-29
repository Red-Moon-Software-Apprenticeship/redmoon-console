"use client"
import React from 'react';
import Link from 'next/link'
import {signOut} from 'next-auth/react'


const LoggedIn = () => {


    return (
        <>
            <button onClick={()=> signOut()}>
                Sign Out
            </button>
        </>   
    );
};

export default LoggedIn;