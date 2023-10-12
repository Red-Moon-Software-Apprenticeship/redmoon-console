"use client"
import Errors from '@/components/Errors';
import { useErrors } from '@/hooks';
import { updateUserVerif } from '@/lib/serverActions/updateUserVerif';
import React, {useState} from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/dist/server/api-utils';

const VerificationForm = () => {
  const [token, setToken] = useState('')
  const [errors, setErrors, clearErrorsEffect] = useErrors()
  const [success, setSuccess] = useState("") 
  const {data: session} = useSession()

  const formAction = async (data) =>{
    const res = await updateUserVerif(data, session?.user?.id)
    if (res?.errors) {
      setErrors(res.errors)
    } else{
      setSuccess(res.msg)
      redirect('/')
    }
  }
  
  clearErrorsEffect(token)
  return (
  <>
   <form action={formAction}>
      <label htmlFor="token">Your Verification Code</label>
      <input type="text" name="token" id="token"  value={token} onChange={e => setToken(e.target.value)}/>
      <button>Submit</button>
   </form> 
   <Errors errors={errors}/>
  </>
  );
};

export default VerificationForm;