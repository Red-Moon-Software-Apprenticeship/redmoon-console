"use client"
import React from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import "./authheader.css"
const LoggedOut = () => {

    return (
        <>
            <button onClick={() => signIn()} className="auth-button">
                Sign in
            </button>
            <button className="auth-button">
                <Link href='/sign-up'>
                    Sign up
                </Link>
            </button>
        </>
    );
};

export default LoggedOut;
