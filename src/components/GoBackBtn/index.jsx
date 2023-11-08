"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const GoBackBtn = () => {

  const router = useRouter()
  const handleOnClick = (e) => {
      e.preventDefault()
      e.stopPropagation()
      router.back()    
  }

  return (
    <button onClick={handleOnClick}>
        Back
    </button>
    );
};

export default GoBackBtn;