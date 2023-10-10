"use client"
import React from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

const LoggedOut = () => {

    return (
        <>
            <button onClick={() => signIn()}>
                Sign in
            </button>
            <button>
                <Link href='/auth/new'>
                    Sign up
                </Link>
            </button>
        </>
    );
};

export default LoggedOut;