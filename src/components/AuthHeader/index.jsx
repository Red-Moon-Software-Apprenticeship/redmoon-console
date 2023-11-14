import React from 'react';
import LoggedIn from './LoggedIn'; 
import LoggedOut from './LoggedOut';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import AuthProvider from '../AuthProvider';

const AuthHeader = async () => {
  const session = await getServerSession(authOptions) 
  return (
    <div id='auth-header-cont'>

        <AuthProvider>
          {(session && session.user) ? <LoggedIn name={session.user.name}/> : <LoggedOut/>}     
        </AuthProvider>
        {(session && session.user && session.user.subRole === 'unverified') && 
           <button className="primary">
            <Link href='/auth/verify'>
              Verify Your Account
            </Link>
           </button>
          } 
    </div>
  );
};

export default AuthHeader;
