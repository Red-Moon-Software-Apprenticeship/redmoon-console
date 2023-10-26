import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Layout from '@/components/Layout/Layout';
import { getServerSession } from 'next-auth';
import React from 'react';

import MapForm from './MapForm';

const Edit = async () => {
    const session = await getServerSession(authOptions);
    
    const{ role, id }  = session?.user;
    
    return (
      <Layout>
          <MapForm role={role} userId={id}/>
      </Layout>
  );
};

export default Edit;