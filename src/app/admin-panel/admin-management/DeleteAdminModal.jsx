
import React from 'react';
import ModalLayout from '@/components/ModalLayout/ModalLayout';
import { useErrors } from '@/hooks';
import { createReq } from '@/lib/createReqObj';
import { useRouter } from 'next/navigation';
import { secureSuperAdminClientFeature } from '@/lib/secureAdminClientFeature';

const DeleteAdminModal = ({ userId, toggleModal }) => {
    const [errors, setErrors, clearErrorsEffect, Errors] = useErrors();
    const {data: session} = useSession()
    const router = useRouter()
    secureSuperAdminClientFeature(router, session?.user)

    const handleDelete = async () => {
        const body = {
            userId
        }
        try {
            const response = await fetch(
                `/api/user/delete/`, 
                createReq('DELETE', body)
            );

            if (response.ok) {
                toggleModal();
            } else {
                throw new Error('Failed to delete user.');
            }
        } catch (error) {
            setErrors([error.message]);
        }
    };

    return (
        <ModalLayout toggleModal={toggleModal}>
            <dialog open id="delete-user-modal" className="admin-modal" onClick={e => e.stopPropagation()}>
                <h2>Delete User Account</h2>
                <p>Are you sure you want to permanently delete this user's account?</p>
                <button onClick={handleDelete} className="delete-button">Delete</button>
                <Errors errors={errors} />
            </dialog>
        </ModalLayout>
    );
};

export default DeleteAdminModal;
