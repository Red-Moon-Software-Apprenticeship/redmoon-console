'use client'
import React, { useState, useEffect } from 'react';

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
                <label>Email:</label>
                <input
                    type="email"
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
                <button onClick={handleOnClick}>
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
            {password.length > 0 && confirm.length > 0 &&
                <span id='pw-match' className={`${pwMatch ? 'pw-matching' : 'pw-not-matching'}`}>
                    {pwMatch ? "Passwords match!" : "Passwords don't match"}
                </span>
            }

            <div>
                <label>State:</label>
                <input
                    type="text"
                    name="state"
                    value={state}
                    onChange={e => setState(e.target.value)}
                />
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