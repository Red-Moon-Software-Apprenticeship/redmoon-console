"use client"
import React, { useState } from 'react';

const ToggleModalBtn = ({innerText, ModalComponent, modalProps, className ='', id=''}) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    const handleOnClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleModal();
    };

    return (
        <>
            <button 
                id={id}
                className={className}
                 onClick={handleOnClick}>
                {innerText}
            </button>
            {showModal && <ModalComponent {...modalProps} toggleModal={toggleModal}/>}
        </>
    );
};

export default ToggleModalBtn;
