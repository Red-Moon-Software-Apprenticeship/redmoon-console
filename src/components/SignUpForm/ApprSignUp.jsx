"use server"
import React from 'react';
import './signupform.css'
import SignUpDefaults from './SignUpDefaults';

export const createAppr = async(data) => {
    "use server"
    const {firstName, lastName, email, password, state, city} = Object.fromEntries(data)
    
} 

const ApprSignUp = ({createAppr}) => {


  return (
    <form 
        id='sign-up-form'
        action={createAppr}
      >

        <div>
            <label>First Name: </label>
            <input type="text" name='firstName'/>
        </div>
        <div>
            <label htmlFor='last-name'>Last Name: </label>
            <input id='last-name' type="text" name='lastName'/>
        </div>

        <SignUpDefaults/>
        <button>Submit</button>
    </form>
  );
};

export default ApprSignUp;