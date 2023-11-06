"use client"
import ModalLayout from '@/components/ModalLayout/ModalLayout';
import React from 'react';

const DeleteIssueModal = ({issueId, toggleModal}) => {
  
    const handleDelete = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }

  return (
    <ModalLayout toggleModal={toggleModal}>
        <dialog open className=''>
          <h3>Are you sure you want to delete this modal</h3>

          <button onClick={handleDelete}>
            Yes
        </button>
        <button onClick={toggleModal}>
            No
        </button>
        </dialog>


    </ModalLayout>

    );
};

export default DeleteIssueModal;