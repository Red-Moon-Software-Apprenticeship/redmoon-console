"use client";
import React, { useState } from 'react';
import SignUpDefaults from './SignUpDefaults';
import { createAppr } from '@/lib/serverActions';  
import { clearForm } from '@/lib/clearForm';
import { redirect, usePathname } from 'next/navigation';
import { ADMIN_ADD_APPRENTICE_PATH } from '@/lib/constants'; 
import './signupform.css';
import { useSignUpBundler, useErrors } from '@/hooks';
import OnSuccess from './OnSuccess';

const CompanySignUp = () => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('');
  const pathname = usePathname();
  const signUpState = useSignUpBundler();
  const { successMsg, setSuccessMsg } = signUpState.successState;
  const [errors, setErrors, clearErrorsEffect] = useErrors();
 
  const formAction = async (data) => {
    const res = await createAppr(data); 
    if (res?.errors) {
      setErrors(res.errors);
    } else {
      if (pathname === ADMIN_ADD_APPRENTICE_PATH) {  
        setSuccessMsg(`Successfully registered the company with address ${address}.`);
      } else {
        redirect('/sign-up/thank-you');
      }
      
      clearForm(setAddress, ...signUpState.setters);
    }
  };

  clearErrorsEffect(address, ...signUpState.getters);

  return (
    <>
      <form id='sign-up-form' action={formAction}>
        <div>
          <label htmlFor="company-name">
             Company Name
          </label>
          <input type="text" name='company-name' value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div>
          <label>Company Address: </label>
          <input type="text" name='address' value={address} onChange={e => setAddress(e.target.value)} />
        </div>

        <SignUpDefaults signUpState={signUpState}/>
        <div>
          <button>Submit</button>
        </div>

        {!!errors.length &&
          <ul>
            {errors.map((error, idx) =>
              <li key={idx}>{error}</li>
            )}
          </ul>
        }
        <OnSuccess successMsg={successMsg}/>
      </form>
    </>
  );
};

export default CompanySignUp;
