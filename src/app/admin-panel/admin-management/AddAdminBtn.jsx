"use client"
import React, {useState} from 'react';
import AddAdminModal from './AddAdminModal'
const AddAdminBtn = ({apprs}) => {

    const [addAdminModal, setAddAdminModal] = useState(false)
    const toggleModal = () => {

        setAddAdminModal(!addAdminModal)
    }

    const handleOnClick = (e) => {
        e.preventDefault()
        e.stopPropagation()
        toggleModal()
    }

    return (
        <>
            <button onClick={handleOnClick}>
                Add New Admin
            </button>
            {addAdminModal && <AddAdminModal apprs={apprs} toggleModal={toggleModal}/>}
        </>
    );
};

export default AddAdminBtn;