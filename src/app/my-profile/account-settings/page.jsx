import Layout from '@/components/Layout/Layout';
import React from 'react';
import ChangePasswordForm from './ChangePasswordForm';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const AccountSettings = async() => {
  const session = await getServerSession(authOptions)
  const sessionUserId = session?.user?.id 

  return (
    <Layout>
        <ChangePasswordForm userId={sessionUserId}/>

    </Layout>
    );
};

export default AccountSettings;