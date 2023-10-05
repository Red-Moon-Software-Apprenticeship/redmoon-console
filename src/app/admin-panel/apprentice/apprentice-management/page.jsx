import Layout from '@/components/Layout/Layout';
import { getApprentices } from '@/database/users/findUsers';
import { secureAdminServerRoute } from '@/lib/secureAdminRoute';
import React from 'react';
import ApprConsole from './ApprConsole';

const ApprenticeManagementConsole = async() => {
  await secureAdminServerRoute()
  const apprs = await getApprentices()

  return (
    <Layout>

      <h2>Apprentices</h2>
      <div className='flex-center'>
        
          <ApprConsole apprs={apprs}/>
      </div>
        
    </Layout>
  );
};

export default ApprenticeManagementConsole;