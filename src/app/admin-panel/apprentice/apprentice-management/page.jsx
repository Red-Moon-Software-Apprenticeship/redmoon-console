import Layout from '@/components/Layout/Layout';
import { secureAdminServerRoute } from '@/lib/secureAdminRoute';
import React from 'react';
import ApprConsole from './ApprConsole';
import Link from 'next/link';

const ApprenticeManagementConsole = async() => {
  await secureAdminServerRoute()
  return (
    <Layout>
      <h2>Apprentices</h2>
      <button>
        <Link href='/admin-panel/apprentice/new'>
          Add an Apprentice
        </Link>
      </button>
 
       <div className='flex-center'>
        <table>
            <tbody>

              <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Level</th>
              </tr>
              <ApprConsole/>
            </tbody>
          </table>

      </div>
        
    </Layout>
  );
};

export default ApprenticeManagementConsole;