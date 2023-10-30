"use client"
import React, {useState} from 'react';
import DeleteAdminModal from './DeleteAdminModal';

const DeleteAdmminBtn = () => {
    const [deleteModal, setDeleteModal] = useState(false)

    const toggleModal = () => {
        setDeleteModal(!deleteModal)    
    }

    const handleOnClick = (e) => {
        e.preventDefault()
        e.stopPropagation()
        toggleModal()
    }
  return (
    <>
        <button onClick={handleOnClick}>
            Delete
        </button>
        {deleteModal && <DeleteAdminModal toggleModal={toggleModal}/>}
    </>
  );
};

export default DeleteAdmminBtn;