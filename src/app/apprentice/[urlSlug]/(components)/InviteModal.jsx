"use client"
import ModalLayout from '@/components/ModalLayout/ModalLayout';
import React, { useState } from 'react';
import { useErrors, useSuccess } from '@/hooks';
import { createReq } from '@/lib/createReqObj';
import { useRouter } from 'next/navigation';
import ExitButton from '@/components/ExitButton';

const InviteModal = ({ apprId, companyId, issues, toggleModal, userId}) => {
    const [selectedIssue, setSelectedIssue] = useState(null);
    const [errors, setErrors, _, Errors] = useErrors();
    const [successMsg, setSuccessMsg, OnSuccess] = useSuccess();
    const router = useRouter();

    const handleIssueSelect = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const issueId = e.target.value;
        const issue = issues.find(issue => issue.id === issueId);
        setSelectedIssue(issue);
    
    };

    const handleOnClick = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (!selectedIssue) {
            setErrors(['Please select an issue']);
            return;
        }

        const body = {
            inviterId: companyId,
            inviteeId: apprId,
            issueId: selectedIssue.id,
            userId
        };

        try {
            const res = await fetch('/api/invites', createReq('POST', body));
            if (res.ok) {
                setSuccessMsg('Invite sent successfully!');
                setTimeout(
                    () => {router.back()}, 1000
                )

            }
        } catch (error) {
            setErrors([error.message]);
        }

        toggleModal();
    };

    return (
        <ModalLayout toggleModal={toggleModal}>
            <dialog open onClick={ e => e.stopPropagation()}>
                <ExitButton toggleModal={toggleModal}/>
                <select 
                    onClick={e=> e.preventDefault()}
                    onChange={handleIssueSelect} value={selectedIssue?.id || ''}>
                    <option value="">Select an issue</option>
                    {issues.map((issue) => (
                        <option
                            key={issue.id}
                            value={issue.id}>{issue.title}</option>
                    ))}
                </select>
                <button onClick={handleOnClick}>Confirm</button>
                <OnSuccess successMsg={successMsg}/>
                <Errors errors={errors} />
            </dialog>
        </ModalLayout>
    );
};

export default InviteModal;
