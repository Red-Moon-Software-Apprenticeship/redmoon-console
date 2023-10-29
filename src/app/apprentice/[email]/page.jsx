import React from 'react';
import Layout from '@/components/Layout/Layout';
import './profile.css'
import { findApprByEmail } from '@/database/users/findUser';

const Profile = async ({params}) => { 
    console.log(params.email)
    const appr = await findApprByEmail(params.email);

    return (
        <Layout>
            {/* <div className="profile-container">
                <img src={appr.image} alt={appr.name} className="profile-image" />
                <h1>{`${firstName} ${lastName}`}</h1>
                <p>Email: {email}</p>
                <p>Location: {`${city}, ${state}`}</p>
                <p>Tech Stack: {techStack.join(', ')}</p>
                <p>Bio: {bio || 'No bio provided'}</p>
            </div> */}
        </Layout>
    );
};


export default Profile;
