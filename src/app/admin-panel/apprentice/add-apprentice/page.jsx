import React from 'react';
import { secureAdminServerRoute } from '@/lib/secureAdminRoute';
import Layout from '@/components/Layout/Layout';

const AddApprentice = async() => {
  await secureAdminServerRoute()

  return (
    <Layout>
    </Layout>
  );
};

export default AddApprentice;
