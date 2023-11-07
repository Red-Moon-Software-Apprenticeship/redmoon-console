import React from 'react';
import Layout from '@/components/Layout/Layout';
import './profile.css'
import { findApprBySlug } from '@/database/users/findUser';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import GoBackBtn from '@/components/GoBackBtn';
import ToggleModalBtn from '@/components/ToggleModalBtn';
import InviteModal from './(components)/InviteModal';
import { findIssuesByUserId } from '@/database/issues';

const Profile = async ({ params }) => {
    const session = await getServerSession(authOptions);
    const {id: userId, role, subRole} = session?.user;
    const appr = await findApprBySlug(params.urlSlug);
    const { image, name, email, city, state, techStack, bio, id } = appr;
    const issues = await findIssuesByUserId(userId)
    
    return (
        <Layout>
            <div className='flex-right'>
                <GoBackBtn/>
            </div>
            <div className="profile-container">
                <div className="profile-left">
                    <img src={image} alt={name} className="profile-image" />
                </div>
                <div className="profile-right">
                    <div className='flex-left flex-align-center'>
                        <h1>{name}</h1>
                        { role !== 'apprentice' && subRole !== 'unpartnered' &&
                            <ToggleModalBtn 
                                innerText={'Invite'}
                                ModalComponent={InviteModal}
                                modalProps = {{apprId: id, inviterId: userId, issues}}
                            />
                        }
                    </div>
                
                    <p>Email: {email}</p>
                    <p>Location: {`${city}, ${state}`}</p>
                    <p>Tech Stack: {techStack.join(', ')}</p>
                    <p>Bio: {bio || 'No bio provided'}</p>
                </div>
            </div>
        </Layout>
    );
};

export default Profile;
