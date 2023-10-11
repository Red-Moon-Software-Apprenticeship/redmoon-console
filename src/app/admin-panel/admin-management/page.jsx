import Layout from '@/components/Layout/Layout';
import UnderConstruction from '@/components/UnderConstruction';
import React from 'react';
import { secureAdminServerRoute } from '@/lib/secureAdminRoute';

const AdminManagement = async () => {

   await secureAdminServerRoute();


  return (
    <Layout>
        <UnderConstruction/>
    </Layout>
    );
};

export default AdminManagement;