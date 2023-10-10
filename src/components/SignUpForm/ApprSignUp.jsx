"use client"
import React, { useState } from 'react';
import './signupform.css'
import SignUpDefaults from './SignUpDefaults';
import { createAppr } from '@/lib/serverActions';
import { useErrors } from '@/hooks/useErrors';
import { clearForm } from '@/lib/clearForm';
import { redirect, usePathname } from 'next/navigation';
import { ADMIN_ADD_APPRENTICE_PATH } from '@/lib/constants';

const ApprSignUp = ({ }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [email, setEmail] = useState('')
  const [stateState, setState] = useState('')
  const [city, setCity] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  const childState = { password, setPassword, confirm, setConfirm }
  const [errors, setErrors, clearErrorsEffect] = useErrors()
  const pathname = usePathname()

 
  const formAction = async (data) => {
    const res = await createAppr(data)
    if (res?.errors) {
      setErrors(res.errors)
    } else {

      if (pathname === ADMIN_ADD_APPRENTICE_PATH){
        setSuccessMsg(`Sucessfully added ${firstName} ${lastName} to the database.`)
      } else {
        redirect('/sign-up/thank-you')
      }
      
      clearForm(
                setFirstName, setLastName, setPassword, 
                setConfirm, setEmail, setCity, setState
                )
    }
  }

  clearErrorsEffect(firstName, lastName, password, confirm)


  return (
    <>

      <form
        id='sign-up-form'
        action={formAction}
      >

        <div>
          <label>First Name: </label>
          <input type="text" name='firstName' value={firstName} onChange={e => setFirstName(e.target.value)} />
        </div>
        <div>
          <label htmlFor='last-name'>Last Name: </label>
          <input id='last-name' type="text" name='lastName' value={lastName} onChange={e => setLastName(e.target.value)} />
        </div>

        <SignUpDefaults childState={childState} />
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

        {
          !!successMsg && <div>
            <p>{successMsg}</p>
          </div>
        }
      </form>
    </>
  );
};

export default ApprSignUp;