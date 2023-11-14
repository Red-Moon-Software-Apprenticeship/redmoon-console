"use client"
import React from 'react';
import { signIn } from 'next-auth/react';
import "./authheader.css"
import { useRouter } from 'next/navigation';
const LoggedOut = () => {
    const router = useRouter();

    return (
        <>
            <button onClick={() => signIn()} className="auth-button">
                Sign in
            </button>
            <button className="auth-button" onClick={() => router.push('/sign-up')}>
                Sign up
            </button>
        </>
    );
};

export default LoggedOut;
