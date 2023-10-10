'use client'
import React from 'react';

const SignUpDefaults = ({childState}) => {
    const {password, setPassword, confirm, setConfirm} = childState;

    return (
        <>
            <div>
                <label>Email:</label>
                <input type="email" name="email" />
            </div>

            <div>
                <label>Password:</label>
                <input
                 type="password"
                 name="password"
                 value={password}
                 onChange={e => setPassword(e.target.value)}/>
            </div>

            <div>
                <label>Confirm Password:</label>
                <input 
                    type="password"
                    name="confirmedPassword"
                    value={confirm}
                    onChange={e => setConfirm(e.target.value)}    
                />
            </div>

            <div>
                <label>State:</label>
                <input type="text" name="state" />
            </div>

            <div>
                <label>City:</label>
                <input type="text" name="city" />
            </div>

        </>
    );
};

export default SignUpDefaults;