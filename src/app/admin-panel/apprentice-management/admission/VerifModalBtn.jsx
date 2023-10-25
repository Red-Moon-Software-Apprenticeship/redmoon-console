"use client"
import React, {useState} from 'react';
import VerifModal from './VerifModal';

const VerifModalBtn = ({userId, emailVerified}) => {
    const [verifModal, setVerifModal] = useState(false ) 
    const toggleVerifModal = () => { 
      setVerifModal(!verifModal)
    }

    const handleOnClick = (e) => {
      e.preventDefault()
      e.stopPropagation()
      toggleVerifModal()   
    }
    
  return (
    <>
      <button
        className={`${ emailVerified? 'read-only-input': ''}`} 
        onClick={handleOnClick}
      >
        {emailVerified ? 'User Verified' : 'Verify User'}
      </button>
      {verifModal && <VerifModal toggleModal={toggleVerifModal} userId={userId}/>} 
    </>
  );
};

export default VerifModalBtn;