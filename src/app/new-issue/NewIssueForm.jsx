"use client"
import React, { useState } from 'react';
import './newissueform.css'
import { useErrors, useSuccess } from '@/hooks';
import { useRouter } from 'next/navigation';
import { createIssue } from '@/lib/serverActions/createIssue';
const NewIssueForm = ({ companyId, techStack }) => {
    const [desc, setDesc] = useState('')
    const [title, setTitle] = useState('')
    const [errors, setErrors, clearErrorsEffect, Errors] = useErrors()
    const [successMsg, setSuccessMsg, OnSuccess] = useSuccess()
    const router = useRouter()

    const formAction = async (formData) => {

        const data = Object.fromEntries(formData);
        data.techStack = techStack;
        data.companyId = companyId;

        const res = await createIssue(data);

        if (res?.errors) {
            setErrors(res.errors)
            return

        } else {
            setSuccessMsg('Succesfully created your issue')
            setTimeout(()=>{
               router.push('/new-issue/next-steps') 
            }, 2000)
        }
    };

    return (
        <>
            <form id='new-issue-form' action={formAction}>
                <label htmlFor="title">
                    Title
                </label>
                <input
                    id="title"
                    type="text"
                    name="title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />

                <label htmlFor="description">
                    Description
                </label>
                <textarea
                    id="description"
                    name="description"
                    value={desc}
                    onChange={e => setDesc(e.target.value)}
                />


                <button type="submit">Create Issue</button>
            </form>
            <OnSuccess successMsg={successMsg} />
            <Errors errors={errors} />
        </>
    );
};

export default NewIssueForm;