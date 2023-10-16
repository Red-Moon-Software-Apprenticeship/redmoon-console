import React from 'react';
import Layout from '@/components/Layout/Layout';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import AdmitConsole from './AdmitConsole';

const Admission = async () => {

  const session = await getServerSession(authOptions)

  if (!session?.user || (session?.user?.role !== 'admin' && session?.user?.subRole !== 'student lead')) {
    redirect('/')
  }

  return (
    <Layout>
      <h1>Approve Git Pull Requests</h1>

     
          <AdmitConsole/>
        
    </Layout>
  );
};

export default Admission;