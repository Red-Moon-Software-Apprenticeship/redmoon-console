"use client"
import React from 'react';
import ModalLayout from '@/components/ModalLayout/ModalLayout';
import { useErrors, useSuccess } from '@/hooks';
import { createReq } from '@/lib/createReqObj';
import { useRouter } from 'next/navigation';

const EndPartnershipModal = ({ companyId, toggleModal }) => {
    const [errors, setErrors, _ , Errors] = useErrors();
    const [successMsg, setSuccessMsg, OnSuccess] = useSuccess()
    const router = useRouter()

    const handleOnClick = async () => {
        const body = { id: companyId, 
                role : 'company', 
                subRole: 'unpartnered'
        };
        try {
            const response = await fetch(
                `/api/user/role`, 
                createReq('PATCH', body)
            );
                
            if (response.ok) {
                setSuccessMsg('Succesfully ended the partnership')
                setTimeout(()=> {
                    toggleModal();
                    router.refresh()

                }, 2000)
            } else {
                throw new Error('Failed to end partnership.');
            }
        } catch (error) {
            setErrors([error.message]);
        }
    };

    return (
        <ModalLayout toggleModal={toggleModal}>
            <dialog open id="end-partnership-modal" className="admin-modal" onClick={e => e.stopPropagation()}>
                <h2>End Partnership</h2>
                <p>Are you sure you want to end this partnership?</p>
                <button onClick={handleOnClick} className="end-button">End Partnership</button>
                <OnSuccess successMsg={successMsg} />
                <Errors errors={errors} />
            </dialog>
        </ModalLayout>
    );
};

export default EndPartnershipModal;
