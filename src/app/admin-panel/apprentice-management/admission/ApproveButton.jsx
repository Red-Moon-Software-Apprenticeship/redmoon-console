'use client'
import React, {useState} from 'react';

const ApprovalButton = ({userId}) => {
  const [isApproved, setIsApproved] = useState(false)
   
  const handleOnClick = (e) => {
    
    setIsApproved(!isApproved) 
    console.log(userId)
  }

  return (
    <button onClick={handleOnClick} className={`${isApproved ? 'read-only-input': ''}`}>
        {isApproved ? 'Approved!' : 'Admit'}
    </button>
  );
};

export default ApprovalButton;