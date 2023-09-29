import React from 'react';
import {useSession} from 'next-auth';
import LoggedIn from './LoggedIn'; 
import LoggedOut from './LoggedOut';

const Login = () => {
  const {data: session} = useSession()


  return (
    <div id='' className=''>
        {(session && session.user) ? <LoggedIn/> : <LoggedOut/>}      
    </div>
  );
};

export default Login;