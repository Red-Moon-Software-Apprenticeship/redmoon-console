"use client"
import React, { useState } from 'react';
import './newissueform.css'
import { useErrors, useSuccess } from '@/hooks';
import { useRouter } from 'next/navigation';
import { createNewIssue } from '@/lib/serverActions/createNewIssue';
import TechStackItem from '@/components/TechStackItem';

const NewIssueForm = ({ companyId, defaultTechStack, companyName }) => {
    const [desc, setDesc] = useState('')
    const [title, setTitle] = useState('')
    const [techStackEntry, setTechStackEntry] = useState('')
    const [techStack, setTechStack] = useState(defaultTechStack)
    const [errors, setErrors, clearErrorsEffect, Errors] = useErrors()
    const [successMsg, setSuccessMsg, OnSuccess] = useSuccess()

    const router = useRouter()

    const handleOnClick = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setTechStack([...techStack, techStackEntry])
        setTechStackEntry('')

    }

    const createRequestBody = (data) => {
         data.techStack = techStack;
        data.companyId = companyId;
        delete data.techStackEntry;
        return data;
    }


    const formAction = async (formData) => {

        const data = createRequestBody(Object.fromEntries(formData));
        
        const res = await createNewIssue(data, companyName);

        if (res?.errors) {
            setErrors(res.errors)
            return

        } else {
            setSuccessMsg('Succesfully created your issue')
            setTimeout(() => {
                router.push('/new-issue/next-steps')
            }, 2000)
        }
    };

    clearErrorsEffect(desc, title, techStack, techStackEntry)

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
                <div>
                    {techStack.map((tech, idx) =>
                        <TechStackItem techStack={techStack} tech={tech}
                            key={idx}
                            idx={idx}
                            setTechStack={setTechStack}
                        />)}

                </div>

                <div>

                    <label htmlFor="techStackEntry">
                        Tech
                    </label>
                    <input
                        type="text"
                        id="techStackEntry"
                        name="techStackEntry"
                        value={techStackEntry}
                        onChange={e => setTechStackEntry(e.target.value)}
                    />
                    <button onClick={handleOnClick}>Add to stack</button>
                </div>

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