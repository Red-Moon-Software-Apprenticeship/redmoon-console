import { createReq } from '@/lib/createReqObj';
import React, { useState } from 'react';

const SignupForm = ({ src = '' }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const [state, setState] = useState('');
    const [city, setCity] = useState('');

    //Specifc to apprentice applications
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    //Specific to companies
    const [address, setAddress] = useState('');

    //Belongs to both
    const [techStack, setTechStack] = useState([]);
    const [bio, setBio] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {

            email,
            password,
            role,
            state,
            city,
            techStack,
            bio,
            firstName,
            lastName,
        };

        try {
            const response = await fetch('/api/user', createReq('POST', payload));
            const data = await response.json();

            if (response.ok) {
                console.log(data);
                // Handle success - maybe redirect or show a success message
            } else {
                console.error(data); // Display the error message from the server
            }
        } catch (error) {
            console.error('There was an error:', error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                {src === 'admin' || role === 'apprentice' ?
                    <>
                        <div>
                            <label>First Name:</label>
                            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div>
                            <label>Last Name:</label>
                            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </div>
                    </>
                    :
                    <div>
                        <label>Your Company's name: </label>
                        <input type="text" value={name} onChange={e => setName(e.target.value)} />
                    </div>

                }

                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div>
                    <label>Role:</label>
                    <input type="text" value={role} onChange={(e) => setRole(e.target.value)} />
                </div>

                <div>
                    <label>State:</label>
                    <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
                </div>

                <div>
                    <label>City:</label>
                    <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                </div>

                <div>
                    <label>Tech Stack (comma-separated):</label>
                    <input type="text" value={techStack.join(', ')} onChange={(e) => setTechStack(e.target.value.split(',').map(item => item.trim()))} />
                </div>

                <div>
                    <label>Bio:</label>
                    <textarea value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
                </div>

                <div>
                    <button type="submit">Sign Up</button>
                </div>
            </form>

        </>
    );
}

export default SignupForm;
