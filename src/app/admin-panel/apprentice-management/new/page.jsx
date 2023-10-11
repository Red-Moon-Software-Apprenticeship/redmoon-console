import React from 'react';
import Layout from '@/components/Layout/Layout';
import ApprSignUp from '@/components/SignUpForm/ApprSignUp';
import Link from 'next/link';
import { secureAdminServerRoute } from '@/lib/secureAdminRoute';

const NewAppr = async () => {

  await secureAdminServerRoute();

  return (
    <Layout>
        <div>
          <button>
            <Link href='/admin-panel/apprentice-management'>
                Return to console
            </Link>
          </button>
        </div>
        <ApprSignUp/>
    </Layout>
    );
};

export default NewAppr;