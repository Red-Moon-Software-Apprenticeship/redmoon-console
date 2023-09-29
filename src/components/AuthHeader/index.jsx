"use client"
import React from 'react';
import {useSession} from 'next-auth/react';
import LoggedIn from './LoggedIn'; 
import LoggedOut from './LoggedOut';


const AuthHeader = () => {
  const {data: session} = useSession()

  console.log(session)
  return (
    <div>
        {(session && session.user) ? <LoggedIn/> : <LoggedOut/>}      
    </div>
  );
};

export default AuthHeader;