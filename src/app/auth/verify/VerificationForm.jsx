"use client"
import { useErrors, useSuccess } from '@/hooks';
import { updateUserVerif } from '@/lib/serverActions/updateUserVerif';
import React, {useState} from 'react';
import { useSession } from 'next-auth/react';
import SendAnotherToken from './SendAnotherToken';
import { redirect } from 'next/navigation';

const VerificationForm = () => {
  const [token, setToken] = useState('')
  const [errors, setErrors, clearErrorsEffect, Errors] = useErrors()
  const {update} = useSession()
  const [successMsg, setSuccessMsg, OnSuccess] =  useSuccess() 
  const {data: session} = useSession()

  const formAction = async (data) =>{
    const res = await updateUserVerif(data, session?.user?.id)
    if (res?.errors) {
      setErrors(res.errors)
    } else{
      setSuccessMsg(res.msg)
      update()
      setTimeout(() => {
        redirect('/')
      }, 4000 )
    }
  }
  
  clearErrorsEffect(token)

  console.log(session)
  if (session && session.user && session?.user?.subRole !== 'unverified') {
    redirect('/')
  }
  
  return (
  <>
   <form action={formAction}>
      <label htmlFor="token">Your Verification Code</label>
      <input type="text" name="token" id="token"  value={token} onChange={e => setToken(e.target.value)}/>
      <button>Submit</button>
   </form> 
   <Errors errors={errors}/>
   <OnSuccess successMsg={successMsg}/> 
   <SendAnotherToken email={session?.user?.email} name={session?.user?.name}/>
  </>
  );
};

export default VerificationForm;