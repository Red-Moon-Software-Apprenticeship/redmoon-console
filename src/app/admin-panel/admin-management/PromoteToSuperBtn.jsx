"use client"
import React, { useState } from 'react';
import PromoteToSuperModal from './PromoteToSuperModal';

const PromoteToSuperBtn = ({ userId }) => {
    const [promoteModal, setPromoteModal] = useState(false);

    const toggleModal = () => {
        setPromoteModal(!promoteModal);
    };

    const handleOnClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleModal();
    };

    return (
        <>
            <button onClick={handleOnClick}>
                Promote to Super Admin
            </button>
            {promoteModal && <PromoteToSuperModal userId={userId} toggleModal={toggleModal} />}
        </>
    );
};

export default PromoteToSuperBtn;
