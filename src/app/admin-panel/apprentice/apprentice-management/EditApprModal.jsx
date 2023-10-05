import ModalLayout from '@/components/ModalLayout/ModalLayout';
import React from 'react';
import './apprmanagement.css'

const EditApprModal = ({appr, toggleModal, apprsState}) => {
    const {apprs, setApprs} = apprsState;
    const handleEdit = async (editedData) => {
        try {
            const response = await fetch(`/api/editApprentice/${appr.userId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editedData),
            });
            if (response.ok) {
                const updatedAppr = await response.json();
                // Update the apprs state with the edited apprentice
                const updatedApprs = apprs.map(a => a.userId === appr.userId ? updatedAppr : a);
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
    return (
        <ModalLayout toggleModal={toggleModal}>
            <dialog className='modal-body' open>
                <div className='flex-right'>
                    <button onClick={toggleModal}>Close</button>
                </div>
                <div className='flex-center flex-col'>
                    <h2>Edit Apprentice Info</h2>
                    <form onSubmit={e => handleEdit(e)}>
                        <div className="input-group">
                            <label>First Name:</label>
                            <input type="text" defaultValue={appr.firstName} name="firstName" required />
                        </div>
                        <div className="input-group">
                            <label>Last Name:</label>
                            <input type="text" defaultValue={appr.lastName} name="lastName" required />
                        </div>
                        {/* Add more input fields as needed */}
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