"use client"

import { createReq } from '@/lib/createReqObj';
import React, { useState } from 'react';
import ApprSignUp from './ApprSignUp';
import CompanySignUp from './CompanySignUp';

//Source is being used to track if this comes from the admin page or not, if it is, it defaults to apprentice options

//Create specific child components that display options based on who is coming through: if its a company, show the items relevent to a company, appr, show appr.  
const SignupForm = ({src = '', defaultRole ='apprentice'}) => {
    
    const [role, setRole] = useState(defaultRole);

    

    //Specifc to apprentice applications
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    //Specific to companies
    const [address, setAddress] = useState('');

    //Belongs to both
    const [techStack, setTechStack] = useState([]);
    const [bio, setBio] = useState('');

    const handleSwapForm = e =>{
        e.stopPropagation()
        setRole(e.target.innerText.toLowerCase())

    }


    return (
        <>  
            { 
                <>
                    <div>
                        <h3>
                            You are a:
                        </h3>
                        <div>
                            <button id='apprentice' onClick={handleSwapForm}>Apprentice</button>
                            <button id='company' onClick={handleSwapForm}>Company</button>
                        </div>
                    </div>
                
               
                </> }
            {
                role === 'apprentice' ? <ApprSignUp/> : <CompanySignUp/>
            }
            
        </>
    );
}

export default SignupForm;
