import React from 'react';
import { secureAdminServerRoute } from '@/lib/secureAdminServerRoute';
import AdminCreateUserPage from '@/components/AdminCreateUserPage';

const NewCompany = async () => {

  await secureAdminServerRoute();

  return (
        <AdminCreateUserPage userType='company' />
    );
};

export default NewCompany;