"use client"
import React from 'react';
import ModalLayout from '@/components/ModalLayout/ModalLayout';
import { useErrors } from '@/hooks';
import { createReq } from '@/lib/createReqObj';
import { useSession } from 'next-auth/react';
import { secureSuperAdminClientFeature } from '@/lib/secureAdminClientFeature';
import { useRouter } from 'next/navigation';

const DemoteAdminModal = ({ userId, toggleModal }) => {
    const [errors, setErrors, clearErrorsEffect, Errors] = useErrors();
    const {data: session} = useSession()
    const router = useRouter()
    secureSuperAdminClientFeature(router, session?.user)
    
    const handleDemote = async () => {
        
        const body = {
            id: userId,
            role: 'apprentice',
            subRole: ''
        }
        try {
            const response = await fetch(
                `/api/users/role`, 
                createReq('PATCH', body)
            );

            if (response.ok) {
                router.refresh()
                toggleModal();
            } else {
                throw new Error('Failed to demote admin.');
            }
        } catch (error) {
            setErrors([error.message]);
        }
    };

    return (
        <ModalLayout toggleModal={toggleModal}>
            <dialog open id="demote-admin-modal" className="admin-modal" onClick={e => e.stopPropagation()}>
                <h2>Demote Admin to Apprentice</h2>
                <p>Are you sure you want to demote this admin?</p>
                <button onClick={handleDemote} className="demote-button">Demote</button>
                <Errors errors={errors} />
            </dialog>
        </ModalLayout>
    );
};

export default DemoteAdminModal;
