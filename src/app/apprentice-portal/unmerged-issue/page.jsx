import React from 'react';
import { secureApprRoute } from '@/lib/secureApprRoute';
import Layout from '@/components/Layout/Layout';

const UnmergedIssue = () => {

    secureApprRoute()

    return (
        <Layout>
            <h1>Merge Your First Issue!</h1>
            <p>Admission to the Redmoon Apprenticeship requires one thing: a merged issue to one of our projects</p>
            <h2>Here's a list of our current projects</h2>

            <ul>
                <li>
                    <h4></h4>
                    <Link href=''>
                    </Link>
                </li>
                <li>
                    <h4></h4>
                    <Link href=''>
                    </Link>
                </li>
            </ul>

            <p>Once you finish, please submit your project bellow</p>
            
        </Layout>
    );
};

export default UnmergedIssue;