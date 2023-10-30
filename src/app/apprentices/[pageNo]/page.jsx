// /home/mfong415/Open Source/redmoon-console/src/app/apprentices/[pageNo]/page.jsx
import React from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getApprsForIndex } from '@/database/users/findUsers';
import Layout from '@/components/Layout/Layout';
import ApprIdxItem from './ApprIdxItem';
import '../appridx.css'

const ApprOffset = async ({params}) => {
  const session = await getServerSession(authOptions);
  const {pageNo} = params; //implement logic here to get a range of apprentices via offset
  const apprs = await getApprsForIndex();
  
  return (
   <Layout>
        <ul className="apprentices-list">
            {apprs.map((appr, idx) => 
                <ApprIdxItem key={idx} appr={appr} />    
            )}
        </ul>
   </Layout>
  );
};

export default ApprOffset;
