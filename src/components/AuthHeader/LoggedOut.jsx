"use client"
import React from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

const LoggedOut = () => {


    return (
        <>
            <button className='btn-lng' onClick={() => signIn()}>
                Sign in
            </button>
            <button className='btn-lng'>
                <Link href='/auth/new-user'>
                    Sign up
                </Link>
            </button>
        </>
    );
};

export default LoggedOut;