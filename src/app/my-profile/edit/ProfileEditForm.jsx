"use client"
import React, {useState} from 'react';
import { useErrors, useSuccess } from '@/hooks';
import CompanySpecificFields from './CompanySpecificFields';
import TechStackItem from './TechStackItem';
import { combineFormEntries } from '@/lib/combineFormEntries';
import { updateUserProfile } from '@/lib/serverActions/updateUserProfile';


const ProfileEditForm = ({ role, userData, userId }) => {
    const [city, setCity] = useState(userData.city);
    const [state, setState] = useState(userData.state);
    const [bio, setBio] = useState(userData.bio);
    const [techStack, setTechStack] = useState(userData.techStack)
    const [techStackEntry, setTechStackEntry] = useState('')
    const [address, setAddress] = useState(userData?.address ?? '')
    const [successMsg, setSuccessMsg, OnSuccess] = useSuccess()
    const [errors, setErrors, clearErrorsEffect, Errors] = useErrors();

    const reformatCompanyData = (data) =>{
        if(role === 'company'){
            delete data.address
            data['company'] = {
                update:{

                    data:{
                        address
                    },
                    where:{
                        userId
                    }
                }
            }

        }

    }

    const formAction = async (formData) => {
        const data = combineFormEntries(formData, {techStack})
        delete data.techStackEntry
        reformatCompanyData(data)
       
        const res = await updateUserProfile(data, userId)
        if (res?.errors) {
            setErrors(res?.errors)
        } else {
            setSuccessMsg("Succesfully updated user data")
         }
    }

    clearErrorsEffect(city, state, bio, techStack, address)

    const handleOnClick = (e) => {
        e.preventDefault()
        e.stopPropagation()
        const newTechStack = [...techStack]
        newTechStack.push(techStackEntry)
        setTechStackEntry('')
        setTechStack(newTechStack)

    }

    return (
        <>
            <form className='flex-col' action={formAction}>
                <label htmlFor="city">City:</label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />

                <label htmlFor="state">State:</label>
                <input
                    type="text"
                    id="state"
                    name="state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                />
                <label htmlFor="techStack">
                    Tech Stack:

                </label>
                <input
                    type="text"
                    id='tech-stack'
                    name='techStack'
                    value={techStackEntry}
                    onChange={(e) => setTechStackEntry(e.target.value)}
                />
                <button onClick={handleOnClick}>Add to tech stack</button>

                <div>
                    {techStack.map((technology, idx) =>
                        <TechStackItem
                         tech={technology}
                         idx={idx}
                         key={idx}
                         techStack={techStack}
                         setTechStack={setTechStack} 
                        />
                    )}
                </div>

                <label htmlFor="bio">Bio:</label>
                <textarea
                    id="bio"
                    name="bio"
                    value={bio ? bio : ''}
                    onChange={(e) => setBio(e.target.value)}
                />
                {  role === 'company' && 
                    <CompanySpecificFields
                         address={address}
                          setAddress={setAddress}
                    /> 
                }

                <button type='submit'>Update Your Profile</button>
            </form>
            <OnSuccess successMsg={successMsg} />
            <Errors errors={errors} />
        </>
    );
};

export default ProfileEditForm;