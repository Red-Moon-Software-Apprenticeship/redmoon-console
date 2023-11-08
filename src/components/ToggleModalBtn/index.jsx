"use client"
import React, { useState } from 'react';
import { createPortal } from 'react-dom';

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
            {showModal && 
                createPortal(
                    <ModalComponent {...modalProps} toggleModal={toggleModal}/>, 
                    document.body
                )}

        </>
    );
};

export default ToggleModalBtn;
