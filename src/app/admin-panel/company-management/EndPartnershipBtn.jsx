"use client"
import React, { useState } from 'react';
import EndPartnershipModal from './EndPartnershipModal';

const EndPartnershipBtn = ({ companyId }) => {
    const [endModal, setEndModal] = useState(false);

    const toggleModal = () => {
        setEndModal(!endModal);    
    }

    const handleOnClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleModal();
    };

    return (
        <>
            <button onClick={handleOnClick} className="end-partnership-button">
                End Partnership
            </button>
            {endModal && <EndPartnershipModal companyId={companyId} toggleModal={toggleModal}/>}
        </>
    );
};

export default EndPartnershipBtn;
