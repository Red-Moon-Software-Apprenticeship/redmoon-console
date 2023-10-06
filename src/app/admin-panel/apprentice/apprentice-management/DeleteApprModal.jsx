"use client"
import ModalLayout from '@/components/ModalLayout/ModalLayout';
import React from 'react';
import './apprmanagement.css'

const DeleteApprModal = ({ appr, toggleModal, apprsState }) => {
    const {apprs, setApprs} = apprsState
    const handleDelete = async () => {

        try {
            const response = await fetch(`/api/user/`, {
                headers:{"Content-Type": "application/json"},
                method: "DELETE",
                body: JSON.stringify({
                    userId: appr.userId
                })
            });
            if (response.ok) {
                const updatedApprs = apprs.filter(a => a.userId !== appr.userId);
                setApprs(updatedApprs);
                
                alert('Apprentice removed successfully!');
                toggleModal();
            } else {
                alert('Error removing apprentice.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error removing apprentice.');
        }
    };

    const handleOnClick = e => {
        e.stopPropagation()
        toggleModal()
    }


    return (
        <ModalLayout toggleModal={toggleModal}>
            <dialog className='modal-body' open onClick={e => e.stopPropagation()}>
                <div className='flex-right'>
                    <button onClick={handleOnClick}>Close</button>
                </div>
                <div className='flex-center flex-col'>
                    <h2>Confirm Removal</h2>
                    <p>Are you sure you want to remove {appr.firstName} {appr.lastName} from Red Moon?</p>
                    <p>We reserve removal for only serious cases.</p>
                    <p>Please consider this carefully, once you remove the apprentice, their data cannot be retrieved.</p>
                    <div className='flex-center'>
                        <button onClick={handleDelete}>
                            Yes, Remove    
                        </button>
                        <button onClick={handleOnClick}>
                            No, Cancel    
                        </button>
                    </div>
                </div>
            </dialog>
        </ModalLayout>
    );
};

export default DeleteApprModal;