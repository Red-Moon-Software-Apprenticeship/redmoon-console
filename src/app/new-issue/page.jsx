import React from 'react';
import { secureAgainstAppr } from '@/lib/secureAgainstAppr';
import Layout from '@/components/Layout/Layout';
import NewIssueForm from './NewIssueForm';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import {secureAgainstUnpartnered} from '@/lib/secureAgainstUnpartnered';
import { prisma } from '@/database';
import { findCompany } from '@/database/users/findUser';



const NewIssue = async () => {
    const session = await getServerSession(authOptions)

    await secureAgainstAppr(session);
    await secureAgainstUnpartnered(session);
    const company = await findCompany(session?.user?.id)
    console.log(company)
    return (
        <Layout>
            <NewIssueForm
                companyId={company.id}
                techStack={company.user.techStack}
                
            />

        </Layout>
    );
};

export default NewIssue;