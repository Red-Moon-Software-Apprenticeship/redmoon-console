"use client"
import ModalLayout from '@/components/ModalLayout/ModalLayout';
import React, { useState } from 'react';
import { useErrors, useSuccess } from '@/hooks';
import { createReq } from '@/lib/createReqObj';
import { useRouter } from 'next/navigation';
const InviteModal = ({ apprId, inviterId, issues, toggleModal }) => {
    const [selectedIssue, setSelectedIssue] = useState(null);
    const [errors, setErrors, _, Errors] = useErrors();
    const [, setSuccessMsg, OnSuccess] = useSuccess();
    const router = useRouter();

    const handleIssueSelect = (e) => {
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
            inviterId,
            inviteeId: apprId,
            issueId: selectedIssue.id
        };

        try {
            const res = await fetch('/api/invites', createReq('POST', body));
            if (res.ok) {
                setSuccessMsg('Invite sent successfully!');
                router.back()
            }
        } catch (error) {
            setErrors([error.message]);
        }

        toggleModal();
    };

    return (
        <ModalLayout toggleModal={toggleModal}>
            <dialog open onClick={handleOnClick}>
                <select onChange={handleIssueSelect} value={selectedIssue?.id || ''}>
                    <option value="">Select an issue</option>
                    {issues.map((issue) => (
                        <option key={issue.id} value={issue.id}>{issue.title}</option>
                    ))}
                </select>
                <button onClick={handleOnClick}>Confirm</button>
                <Errors errors={errors} />
            </dialog>
        </ModalLayout>
    );
};

export default InviteModal;
