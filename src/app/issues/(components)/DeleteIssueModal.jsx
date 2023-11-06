"use client"
import ModalLayout from '@/components/ModalLayout/ModalLayout';
import React from 'react';

const DeleteIssueModal = ({ issueId, toggleModal }) => {


    //boilerplate, needs editing
    const handleDelete = async(e) => {
        e.preventDefault();
        e.stopPropagation();

        try {
            const response = await fetch(`/api/issues/${issueId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`Failed to delete the issue: ${response.statusText}`);
            }

            const result = await response.json();
            console.log(result); // Handle the response as needed
            
            toggleModal(); // Close the modal upon successful deletion

        } catch (error) {
            console.error
        }
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