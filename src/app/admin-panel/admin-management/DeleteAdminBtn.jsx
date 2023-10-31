"use client"
import React, {useState} from 'react';
import DeleteAdminModal from './DeleteAdminModal';

const DeleteAdmminBtn = ({userId}) => {
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
        {deleteModal && <DeleteAdminModal userId={userId} toggleModal={toggleModal}/>}
    </>
  );
};

export default DeleteAdmminBtn;