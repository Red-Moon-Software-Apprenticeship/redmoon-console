"use client"
import OnSuccess from '@/components/OnSuccess';
import { useErrors } from '@/hooks';
import React, { useState } from 'react';
import { redirect } from 'next/navigation';
import { upsertAdmissionPR } from '@/lib/serverActions/upsertAdmissionPR';

const  IssueSubmitForm = ({userId}) => {
  const [pullRequestUrl, setPullRequestUrl] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  const [errors, setErrors, clearErrorsEffect, Errors] = useErrors()

  const formAction = async (data)=>{
    const res = await upsertAdmissionPR(data, userId)
    if(res?.errors){
      setErrors(res.errors)
    } else{
        setSuccessMsg('Sucessfully submitted pull request link!')
        setTimeout(()=>{
           redirect('/apprentice-portal-pr-updated') 
        }, 3000)
    }
  }

  clearErrorsEffect(pullRequestUrl)
  return (
    <>
        <form action={formAction}>
            <label htmlFor='pullRequestURL'>Issue URL:</label>
            <input name='pullRequestURL' type="text" value={pullRequestUrl} onChange={(e)=>setPullRequestUrl(e.target.value)}/>
            <button>Submit</button>
        </form>
        <Errors errors={errors}/>        
        <OnSuccess successMsg={successMsg}/>
    </>
    );
};

export default IssueSubmitForm;
