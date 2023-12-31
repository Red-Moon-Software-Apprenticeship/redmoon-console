import Layout from '@/components/Layout/Layout';
import { secureAdminServerRoute } from '@/lib/secureAdminServerRoute';
import React from 'react';
import ApprConsole from './ApprConsole';
import Link from 'next/link';
import '../adminpanel.css'

const ApprenticeManagement = async() => {
  await secureAdminServerRoute()
  return (
    <Layout>
      <h2>Apprentices</h2>
      <button>
        <Link href='/admin-panel/apprentice-management/new'>
          Add an Apprentice
        </Link>
      </button>
      <button>
        <Link href='/admin-panel/apprentice-management/admission'>
          Admit an Apprentice        
        </Link>
      </button>
       <div className='flex-center'>
        <table id='admin-page-table'>
            <tbody>
              <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Level</th>
                  <th>Remove</th>
                  <th>Edit Info</th>
                  <th>Verification Code</th>
              </tr>
              <ApprConsole/>
            </tbody>
          </table>

      </div>
        
    </Layout>
  );
};

export default ApprenticeManagement;