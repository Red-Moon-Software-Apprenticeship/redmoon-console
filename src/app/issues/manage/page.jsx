import React from 'react';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Layout from '@/components/Layout/Layout';
import { getServerSession } from 'next-auth';

const ManageTeam = async() => {
  const session = await getServerSession(authOptions);
  
  return (
    <Layout>
        
    </Layout>
    );
};

export default ManageTeam;