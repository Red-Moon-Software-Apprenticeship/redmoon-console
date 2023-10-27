import React from 'react';
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getApprsForIndex } from '@/database/users/findUsers'
import Layout from '@/components/Layout/Layout';
import ApprIdxItem from './ApprIdxItem' 

const ApprOffset = async () => {
  const session = await getServerSession(authOptions);
  const apprs = await getApprsForIndex()  

  return (
   <Layout>
        <ul>
            {apprs.map((appr, idx) => 
                <ApprIdxItem key={idx} appr={appr} />    
            )}
        </ul>
   </Layout>
  )
};

export default ApprOffset;