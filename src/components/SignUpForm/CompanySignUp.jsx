"use client";
import React, { useState } from 'react';
import SignUpDefaults from './SignUpDefaults';
import { clearForm } from '@/lib/clearForm';
import { usePathname } from 'next/navigation';
import { ADMIN_ADD_COMPANY_PATH } from '@/lib/constants';
import { createCompany } from '@/lib/serverActions';
import './signupform.css';
import { useSignUpBundler, useErrors } from '@/hooks';
import OnSuccess from '../OnSuccess';
import { signUpSubmitSideEffects } from '@/lib/signUpSubmitSideEffects';

const CompanySignUp = () => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('');
  const pathname = usePathname();
  const signUpState = useSignUpBundler();
  const [password] = signUpState.getters;
  const [successMsg, setSuccessMsg, clearSuccessMsg] = signUpState.successState;
  const [errors, setErrors, clearErrorsEffect, Errors] = useErrors();
  
  const formAction = async (data) => {
    const res = await createCompany(data);
    if (res?.errors) {
      setErrors(res.errors);
    } else {

      if (pathname === ADMIN_ADD_COMPANY_PATH) {
        setSuccessMsg(`Successfully registered the ${name}.`);
        clearForm(setName, setAddress, ...signUpState.setters);
      } else {
      //  signUpSubmitSideEffects(res, password) 
        redirect("/sign-up/thank-you-company")

      }

    }
    return
  };

  clearSuccessMsg()
  clearErrorsEffect(address, name, ...signUpState.getters);

  return (
    <>
      <form 
        id='sign-up-form' 
        action={formAction}
      >
        <div>
          <label htmlFor="name">
            Company Name
          </label>
          <input type="text" name='name' value={name} onChange={e => setName(e.target.value)} />
        </div>
        <SignUpDefaults signUpState={signUpState} />
        <div>
          <label htmlFor='address'>Company Address: </label>
          <input type="text" id='address' name='address' value={address} onChange={e => setAddress(e.target.value)} />
        </div>

        <div className='flex-right'>
          <button className='sign-up-btn'>Submit</button>
        </div>

        <Errors errors={errors}/>
        <OnSuccess successMsg={successMsg} />
      </form>
    </>
  );
};

export default CompanySignUp;
