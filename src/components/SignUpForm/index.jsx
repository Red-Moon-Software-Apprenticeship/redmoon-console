"use client"
import React, { useState } from 'react';
import ApprSignUp from './ApprSignUp';
import CompanySignUp from './CompanySignUp';

//Source is being used to track if this comes from the admin page or not, if it is, it defaults to apprentice options

//Create specific child components that display options based on who is coming through: if its a company, show the items relevent to a company, appr, show appr.  
const SignupForm = ({}) => {
    
    const [role, setRole] = useState('apprentice');


    const handleSwapForm = e =>{
        e.stopPropagation()
        setRole(e.target.innerText.toLowerCase())

    }


    return (
        <>  
            { 
                <>
                    <div id='sign-up-cont' className='flex-center flex-col'>
                        <h3>
                            You are a:
                        </h3>
                        <div>
                            <button id='apprentice'
                                className={`swap-form-btn ${role==='apprentice' && 'read-only-input'}`}
                                onClick={handleSwapForm}>Apprentice</button>
                            <button id='company' 
                            className={`swap-form-btn ${role==='company' && 'read-only-input'}`}

                            onClick={handleSwapForm}>Company</button>
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
