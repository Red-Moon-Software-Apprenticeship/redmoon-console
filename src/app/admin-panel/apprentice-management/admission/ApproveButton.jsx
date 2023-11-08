'use client'
import { createReq } from '@/lib/createReqObj';
import React, {useEffect, useState} from 'react';

const ApprovalButton = ({userId}) => {
  const [isApproved, setIsApproved] = useState(false)
  const [errors, setErrors] = useState([])
  const handleOnClick = async e => {
    e.stopPropagation()
    e.preventDefault()

    const body = {
      userId,
      subRole: ''
    }
    try {
      const  response = await fetch('/api/users/admin-override/apprentice/approve', createReq('PATCH', body))
      if (response.ok) setIsApproved(!isApproved)

    } catch (error) {
       setErrors(['Error'])
       
    }


  }

  useEffect(()=>{
    if(errors.length){
      setTimeout(()=>{ setErrors([]) }, 3000)
    } 
  }
    , [errors])

  return (
    <button onClick={handleOnClick} className={`${isApproved ? 'read-only-input': ''}`}>
        { errors.length
          ? [errors][0]
          : isApproved ? 'Approved!' : 'Admit'}
    </button>
  );
};

export default ApprovalButton;