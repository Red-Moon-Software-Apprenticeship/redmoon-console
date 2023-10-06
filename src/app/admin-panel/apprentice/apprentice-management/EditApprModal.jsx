import ModalLayout from '@/components/ModalLayout/ModalLayout';
import React, { useState } from 'react';
import './apprmanagement.css'
import { createReq } from '@/lib/createReqObj';

const EditApprModal = ({ appr, toggleModal, apprsState }) => {
    const { apprs, setApprs } = apprsState;
    const [isEditable, setIsEditable] = useState(false);


    const handleEdit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const editedData = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            level: parseInt(formData.get('level')),
            userId: appr.userId
        };

        try {
            const response = await fetch(`/api/apprentice/`, createReq('PATCH', editedData));
            if (response.ok) {
                const {updatedAppr} = await response.json();
                const updatedApprs = apprs.map(a => a.userId === appr.userId ? {...a, ...updatedAppr} : a);
                setApprs(updatedApprs);

                alert('Apprentice updated successfully!');
                toggleModal();
            } else {
                alert('Error updating apprentice.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error updating apprentice.');
        }
    };

    const handleOnClick = (e) => {
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
                    <h2>Edit Apprentice Info</h2>
                    <p>DO NOT casually edit an apprentices name, this portal is mainly used for level management</p>
                    <button onClick={() => setIsEditable(!isEditable)}>
                        {isEditable ? "Lock Fields" : "Unlock Fields"}
                    </button>

                    <form onSubmit={handleEdit}>
                        <div className="input-group">
                            <label>First Name:</label>
                            <input
                                type="text"
                                defaultValue={appr.firstName}
                                name="firstName"
                                required readOnly={!isEditable}
                                className={!isEditable ? 'read-only-input' : ''}  // Apply the class conditionally    
                            />
                        </div>
                        <div className="input-group">
                            <label>Last Name:</label>
                            <input
                                type="text"
                                defaultValue={appr.lastName}
                                name="lastName"
                                required
                                readOnly={!isEditable}
                                className={!isEditable ? 'read-only-input' : ''}  // Apply the class conditionally
                            />

                        </div>
                        <div className="input-group">
                            <label>Level:</label>
                            <input
                                type="number"
                                defaultValue={appr.level}
                                name="level"
                                required
                                min="1"
                                max="3"
                            />
                        </div>
                        <div className='flex-center'>
                            <button type="submit">Save Changes</button>
                            <button type="button" onClick={toggleModal}>Cancel</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </ModalLayout>
    );
};

export default EditApprModal;
