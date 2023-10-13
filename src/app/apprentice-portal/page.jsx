import React from 'react';
import { secureApprRoute } from '@/lib/secureApprRoute';
import Layout from '@/components/Layout/Layout';

const ApprPortal = () => {
    secureApprRoute()
    
    return (
        <Layout>

        </Layout>
    );
};

export default ApprPortal