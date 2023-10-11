"use client"
import React, { useState } from 'react';
import SignUpDefaults from './SignUpDefaults';
import { createAppr } from '@/lib/serverActions';
import { clearForm } from '@/lib/clearForm';
import { redirect, usePathname } from 'next/navigation';
import { ADMIN_ADD_APPRENTICE_PATH } from '@/lib/constants';
import './signupform.css'
import { useSignUpBundler, useErrors } from '@/hooks';
import OnSuccess from './OnSuccess';
import {signIn } from 'next-auth/react';

const ApprSignUp = ({ }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const pathname = usePathname()
  const signUpState = useSignUpBundler()
  const [password] = signUpState.getters;
  const [successMsg, setSuccessMsg] = signUpState.successState;
  const [errors, setErrors, clearErrorsEffect] = useErrors()

  const formAction = async (data) => {
    const res = await createAppr(data)
    if (res?.errors) {
      setErrors(res.errors)
    } else {
      //Pathbased logic, using the path we can determine 
      if (pathname === ADMIN_ADD_APPRENTICE_PATH) {
        setSuccessMsg(`Sucessfully added ${firstName} ${lastName} to the database.`)
      } else {
        await signIn('credentials',
          {
            email: res.email,
            password,
            redirect: true,
            callbackUrl: '/sign-up/thank-you-appr'
          }
      )
      clearForm(setFirstName, setLastName, ...signUpState.setters)

      }
    }
  }

  clearErrorsEffect(firstName, lastName, ...signUpState.getters)


  return (
    <>

      <form
        id='sign-up-form'
        action={formAction}
      >

        <div>
          <label htmlFor='firstName'>First Name: </label>
          <input type="text" id='firstName' name='firstName' value={firstName} onChange={e => setFirstName(e.target.value)} />
        </div>
        <div>
          <label htmlFor='last-name'>Last Name: </label>
          <input id='last-name' type="text" name='lastName' value={lastName} onChange={e => setLastName(e.target.value)} />
        </div>

        <SignUpDefaults signUpState={signUpState} />
        <div className='flex-right'>
          <button>Submit</button>
        </div>

        {!!errors.length &&
          <ul>
            {errors.map((error, idx) =>
              <li key={idx}>{error}</li>
            )}
          </ul>
        }
        <OnSuccess successMsg={successMsg} />

      </form>
    </>
  );
};

export default ApprSignUp;