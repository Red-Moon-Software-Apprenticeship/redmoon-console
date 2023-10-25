import { createReq } from '@/lib/createReqObj';
import React from 'react';

const SendAnotherToken = ({ email, name}) => {

    const handleOnClick = (e) => {
        e.preventDefault()
        e.stopPropagation()
        fetch('/api/email/verify', createReq('POST', {email, name})) //10/13/2023 as of this date the route functions haven't been completed, hung up on emailing 
    }

    return (
        <>
            <p>
                If your token is expired, you can click here to
                <span 
                    onClick={handleOnClick}
                    className='cursor-events'
                >
                    {' '}send another
                </span>
                
            </p>
        </>
    );
};

export default SendAnotherToken;