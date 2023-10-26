"use client"
import { useErrors, useSuccess } from '@/hooks';
import React, { useState } from 'react';
import { createReq } from '@/lib/createReqObj';
import { clearForm } from '@/lib/clearForm';

const PasswordChangeForm =({userId}) => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors, clearErrorsEffect, Errors] = useErrors()
    const [successMsg, setSuccessMsg, OnSuccess] = useSuccess() 
        
    const formAction = async (data) => {

        
        if (newPassword !== confirmPassword) {
            setErrors(['Passwords do not match!'])
            return;
        }
        
        const res = await changePassword(data)


        if (res?.errors){

            setErrors(res.errors)
        }else{
            setSuccessMsg('Password changed successfully!')
            clearForm(setCurrentPassword, setNewPassword, setConfirmPassword)
        }
    };
    
    clearErrorsEffect(
        currentPassword, newPassword, confirmPassword, successMsg
    )

    return (
        <>
            <form onSubmit={formAction}>
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
