import React from 'react';
import Layout from '@/components/Layout/Layout';
import ApprSignUp from '@/components/SignUpForm/ApprSignUp';
import CompanySignUp from '../SignUpForm/CompanySignUp';
import Link from 'next/link';
import { secureAdminServerRoute } from '@/lib/secureAdminServerRoute';

const AdminCreateUserPage = async ({userType}) => {

  const MAP_COMPONENT = {
    'appr': <ApprSignUp/>,
    'company': <CompanySignUp/>
  }

  const MAP_PATH = {
    'appr': '/admin-panel/apprentice-management',
    'company': '/admin-panel/company-management'
  }
  await secureAdminServerRoute();

  return (
    <Layout>
        <div>
          <button>
            <Link href={MAP_PATH[userType]}>
                Return to console
            </Link>
          </button>
        </div>
        {MAP_COMPONENT[userType]}
    </Layout>
    );
};

export default AdminCreateUserPage;