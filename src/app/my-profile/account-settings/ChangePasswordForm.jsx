"use client"
import { useErrors, useSuccess } from '@/hooks';
import React, { useState } from 'react';
import { createReq } from '@/lib/createReqObj';

const PasswordChangeForm =({userId}) => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors, clearErrorsEffect, Errors] = useErrors()
    const [successMsg, setSuccessMsg, OnSuccess] = useSuccess() 
        
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            setErrors(['Passwords do not match!'])
            return;
        }

        const body = 
                    {
                        userId, 
                        currentPassword,
                        newPassword 
                    }


        try {
           
            const res = await fetch('/api/user/password', createReq('PATCH', body))
            
        } catch (error) {
            
        }
    };
    
    clearErrorsEffect(
        currentPassword, newPassword, confirmPassword, successMsg
    )

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="currentPassword">Current Password:</label>
                    <input
                        type="password"
                        id="currentPassword"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="newPassword">New Password:</label>
                    <input
                        type="password"
                        id="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Change Password</button>
            </form>
            <OnSuccess successMsg={successMsg}/> 
            <Errors errors={errors}/>
        </>
    );
}

export default PasswordChangeForm;
