import React from 'react';
import './issues.css';
import Link from 'next/link';
import Layout from '@/components/Layout/Layout';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { secureAgainstAppr } from '@/lib/secureAgainstAppr';
import { secureAgainstUnpartnered } from '@/lib/secureAgainstUnpartnered';
import IssueItem from './(components)/IssueItem';
import { findIssuesByUserId } from '@/database/issues';

export const dynamic = 'force-dynamic';

const Issues = async () => {
    const session = await getServerSession(authOptions);
    await secureAgainstAppr(session);
    await secureAgainstUnpartnered(session);
    const userId = session?.user?.id;
    const issues = await findIssuesByUserId(userId)
    

    return (
        <Layout>
            <div className='flex-right'>
                <Link href='/issues/new-issue'>
                    <button className="button-new-issue">
                        Create New Issue
                    </button>
                </Link>
            </div>
            <ul className="issue-list">
                {issues.map((issue, idx) => (
                    <IssueItem key={idx} userId={userId} issue={issue} />
                ))}
            </ul>
        </Layout>
    );
};

export default Issues;