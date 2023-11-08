import React from 'react';
import { secureAgainstAppr } from '@/lib/secureAgainstAppr';
import Layout from '@/components/Layout/Layout';
import IssueForm from '../(components)/IssueForm';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../api/auth/[...nextauth]/route';
import {secureAgainstUnpartnered} from '@/lib/secureAgainstUnpartnered';
import { findCompany } from '@/database/users/findUser';

const NewIssue = async () => {
    const session = await getServerSession(authOptions)
    await secureAgainstAppr(session);
    await secureAgainstUnpartnered(session);
    const company = await findCompany(session?.user?.id)
    
    return (
        <Layout>
            <IssueForm
                companyName={session?.user?.name}
                companyId={company.id}
                defaultTechStack={company.user.techStack}
                userId = {session?.user?.id} 
            />

        </Layout>
    );
};

export default NewIssue;