import Layout from '@/components/Layout/Layout';
import React from 'react';
import VerificationForm from './VerificationForm';
import AuthProvider from '@/components/AuthProvider';
const VerifyNewUser = () => {
    
    return (
    <Layout>
      <h2>Verify Your Account</h2>
      <AuthProvider>

        <VerificationForm/>

      </AuthProvider>
    </Layout>    
  );
};

export default  VerifyNewUser;