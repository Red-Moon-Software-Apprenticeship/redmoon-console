"use server"
import React from 'react';
import SignUpDefaults from './SignUpDefaults';

const createAppr = async(data) => {
    "use server"

    console.log(data)



} 

const ApprSignUp = ({createAppr}) => {


  return (
    <form action={createAppr}>
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