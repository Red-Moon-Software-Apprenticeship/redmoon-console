import Layout from '@/components/Layout/Layout';
import CompanySignUp from '@/components/SignUpForm/CompanySignUp';
import UnderConstruction from '@/components/UnderConstruction';
import { secureAdminServerRoute } from '@/lib/secureAdminRoute';
import React from 'react';

const CompanyManagement = async () => {

  await secureAdminServerRoute()
  return (
    <Layout>

        <CompanySignUp/>
        <UnderConstruction/>
     </Layout>

    );
};

export default CompanyManagement;