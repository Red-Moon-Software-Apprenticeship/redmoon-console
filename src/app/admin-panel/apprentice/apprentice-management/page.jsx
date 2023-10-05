import Layout from '@/components/Layout/Layout';
import {prisma} from '@/database/db'
import { secureAdminServerRoute } from '@/lib/secureAdminRoute';
import React from 'react';
import ApprConsole from './ApprConsole';
import { getApprsProfile } from '@/database/users/findUsers';

const ApprenticeManagementConsole = async() => {
  await secureAdminServerRoute()
  return (
    <Layout>
      <h2>Apprentices</h2>
      <div className='flex-center'>
        <table>
              <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Level</th>
              </tr>
          <ApprConsole/>
          </table>

      </div>
        
    </Layout>
  );
};

export default ApprenticeManagementConsole;