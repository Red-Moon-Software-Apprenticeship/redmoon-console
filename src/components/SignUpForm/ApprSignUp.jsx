"use client"
import React, {useState} from 'react';
import './signupform.css'
import SignUpDefaults from './SignUpDefaults';
import { createAppr } from '@/lib/serverActions';
import { useErrors } from '@/hooks/useErrors';

const ApprSignUp = ({}) => {
  const [firstName, setFirstName] = useState('') 
  const [lastName, setLastName] = useState('') 

  const [errors, setErrors, clearErrorsEffect] = useErrors()

  const formAction = async(data)  =>{
    const res = await createAppr(data)
    if(res?.errors){
        setErrors(res.errors)
    } else{
      //redirect logic here

    }
  }

  clearErrorsEffect(firstName, lastName)


  return (
    <form 
        id='sign-up-form'
        action={formAction}
      >

        <div>
            <label>First Name: </label>
            <input type="text" name='firstName' value={firstName} onChange={e => setFirstName(e.target.value)}/>
        </div>
        <div>
            <label htmlFor='last-name'>Last Name: </label>
            <input id='last-name' type="text" name='lastName' value={lastName} onChange={e => setLastName(e.target.value)}/>
        </div>

        <SignUpDefaults/>
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
    </form>
  );
};

export default ApprSignUp;