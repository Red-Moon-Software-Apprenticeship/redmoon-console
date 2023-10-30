import React from 'react';
import Layout from '@/components/Layout/Layout';
import './profile.css'
import { findApprBySlug } from '@/database/users/findUser';

const Profile = async ({params}) => { 
    
    const appr = await findApprBySlug(params.urlSlug);
    const {image, name, email, city, state, techStack, bio} = appr;
    return (
        <Layout>
            <div className="profile-container">
                <img src={appr.image} alt={appr.name} className="profile-image" />
                <h1>{`${name}`}</h1>
                <p>Email: {email}</p>
                <p>Location: {`${city}, ${state}`}</p>
                <p>Tech Stack: {techStack.join(', ')}</p>
                <p>Bio: {bio || 'No bio provided'}</p>
            </div>
        </Layout>
    );
};


export default Profile;
