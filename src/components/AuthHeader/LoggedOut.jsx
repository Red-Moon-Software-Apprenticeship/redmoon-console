import React from 'react';

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