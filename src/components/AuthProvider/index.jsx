"use client"
import { SessionProvider } from 'next-auth/react';
import React from 'react';

//Boilerplate Session provider component for wrapping anything that is auth locked

const AuthProvider = ({ children }) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
};

export default AuthProvider;