import React from 'react';
import { secureAdminServerRoute } from '@/lib/secureAdminServerRoute';
import AdminCreateUserPage from '@/components/AdminCreateUserPage';

const NewAppr = async () => {

  await secureAdminServerRoute();

  return (
    <AdminCreateUserPage userType='appr'/>
  );
};

export default NewAppr;