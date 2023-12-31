'use client'
import React, { useState, useEffect } from 'react';
import USStatesDropdown from '../USStatesDropdown';

const SignUpDefaults = ({ signUpState }) => {
    const [password, confirm, email, state, city] = signUpState.getters;
    const [setPassword, setConfirm, setEmail, setState, setCity] = signUpState.setters;
    const [showPw, setShowPw] = useState(false)
    const [pwMatch, setPwMatch] = useState(true);

    const handleOnClick = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setShowPw(!showPw)
    }

    useEffect(() => {
        if (password !== confirm) {
            setPwMatch(false)
        } else {
            setPwMatch(true)
        }
    }, [password, confirm])
    
    return (
        <>
            <div>
                <label htmlFor='email'>Email:</label>
                <input
                    type="email"
                    id='email'
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type={`${showPw ? 'text' : 'password'}`}
                    id="password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)} 
                />
            </div>
            <div className='flex-right'>
                <button className='sign-up-btn' onClick={handleOnClick}>
                    Show Password
                </button>
            </div>

            <div>
                <label htmlFor="confirmedPassword">Confirm Password:</label>
                <input
                    type="password"
                    id="confirmedPassword"
                    name="confirmedPassword"
                    value={confirm}
                    onChange={e => setConfirm(e.target.value)}
                />
            </div>
            <div id='pw-match' className='flex-right'>

            {password.length > 0 && confirm.length > 0 &&
                <span id='pw-match-txt' className={`${pwMatch ? 'pw-matching' : 'pw-not-matching'}`}>
                    {pwMatch ? "Passwords match!" : "Passwords don't match"}
                </span>
            }
            </div>

            <div>
                <label htmlFor='state'>State:</label>
                 <USStatesDropdown state={state} setState={setState}/> 
            </div>

            <div>
                <label>City:</label>
                <input
                    type="text"
                    name="city"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                />
            </div>

        </>
    );
};

export default SignUpDefaults;