import React from 'react';
import Layout from '@/components/Layout/Layout';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

const Admission = async() => {
  
  const session = await getServerSession(authOptions)
  const {role, subRole } = session?.user;
  if (!session?.user || (role !== 'admin' && subRole !== 'student lead')){
    redirect('/')
  }

  

  return (
    <Layout>
      <h1>Approve Git Pull Requests</h1>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Issue Link</th>
          </tr>

        </tbody>
      </table>
    </Layout>
  );
};

export default Admission;