import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Layout from '@/components/Layout/Layout';
import { getServerSession } from 'next-auth';
import React from 'react';
import { findUserProfileData } from '@/database/users/findUser';
import ProfileEditForm from './ProfileEditForm';

const Edit = async () => {
    const session = await getServerSession(authOptions);
    const{ role, id }  = session?.user;
    const userData = await findUserProfileData(id, role); 
    console.log(userData)
    return (
      <Layout>
          <ProfileEditForm role={role} userData={userData} userId={id} /> 
      </Layout>
  );
};

export default Edit;