"use client"
import ModalLayout from '@/components/ModalLayout/ModalLayout';
import { useErrors, useSuccess } from '@/hooks';
import React from 'react';
import { createReq } from '@/lib/createReqObj';
import { useRouter } from 'next/navigation';

const DeleteIssueModal = ({ userId, issueId, toggleModal }) => {

    const [errors, setErrors, _ , Errors] = useErrors()
    const [successMsg, setSuccessMsg, OnSuccess] = useSuccess()
    const router = useRouter()
    //boilerplate, needs editing
    const handleDelete = async(e) => {
        e.preventDefault();
        e.stopPropagation();
        const body = { issueId, userId }

        try {
            const response = await fetch(`/api/issue`, createReq('DELETE', body ));

            if (!response.ok) {
                throw new Error(`Failed to delete the issue: ${response.statusText}`);
            }
            
            const result = await response.json();
            
            toggleModal(); 
            router.refresh()
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

                {!!errors.length && <Error errors={errors}/>}

            </dialog>


        </ModalLayout>

    );
};

export default DeleteIssueModal;