import React from 'react';
import './apprmanagement.css';
import ModalLayout from '@/components/ModalLayout/ModalLayout';

const AddApprModal = ({ toggleModal }) => {


    return (
        <ModalLayout toggleModal={toggleModal}>
            <dialog
                open
                onClick={e => e.stopPropagation()}
                className='modal-body'
            >
                <button onClick={toggleModal}>
                    Exit
                </button>
            
            {/* Needs a form here based on database schema to add a new user, who is an apprentice */}
            
            </dialog>
        </ModalLayout>
    );
};

export default AddApprModal;