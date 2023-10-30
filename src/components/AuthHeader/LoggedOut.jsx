"use client"
import React from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

const LoggedOut = () => {

    return (
        <>
            <button onClick={() => signIn()} className="primary">
                Sign in
            </button>
            <button className="secondary">
                <Link href='/sign-up'>
                    Sign up
                </Link>
            </button>
        </>
    );
};

export default LoggedOut;
