"use client"
import React, {useState} from 'react';
import DemoteAdminModal from './DemoteAdminModal';

const DemoteAdminBtn = ({userId}) => {
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
        {demoteModal && <DemoteAdminModal userId={userId} toggleModal={toggleModal}/>}
    </>
  );
};

export default DemoteAdminBtn;