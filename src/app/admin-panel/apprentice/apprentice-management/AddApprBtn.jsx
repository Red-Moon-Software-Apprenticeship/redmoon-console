"use client"
import React, { useState } from 'react';
import './apprmanagement.css';
import AddApprModal from './AddApprModal';

const AddApprBtn = () => {
    const [addApprModal, setAddApprModal] = useState(false);


    return (
        <>
            <button onClick={() => setAddApprModal(prev => !prev)}>
                Add an Apprentice
            </button>
            {addApprModal && <AddApprModal toggleModal={() => setAddApprModal(prev => !prev)} />}
        </>
    );
};

export default AddApprBtn;