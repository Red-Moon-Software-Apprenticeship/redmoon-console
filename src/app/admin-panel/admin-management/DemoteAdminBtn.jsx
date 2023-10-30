"use client"
import React, {useState} from 'react';
import DemoteAdminModal from './DemoteAdminModal';

const DemoteAdminBtn = () => {
    const [demoteModal, setDemoteModal] = useState(false)
    const toggleModal = () => {
        setDemoteModal(!demoteModal)    
    }

    const handleOnClick = (e) => {
        e.preventDefault()
        e.stopPropagation()
        toggleModal()
    }
  return (
    <>
        <button onClick={handleOnClick}>
            Edit
        </button>
        {demoteModal && <DemoteAdminModal toggleModal={toggleModal}/>}
    </>
  );
};

export default DemoteAdminBtn;