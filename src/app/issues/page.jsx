import React from 'react';
import './issues.css';
import Link from 'next/link';
import Layout from '@/components/Layout/Layout';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { secureAgainstAppr } from '@/lib/secureAgainstAppr';
import { secureAgainstUnpartnered } from '@/lib/secureAgainstUnpartnered';
import IssueItem from './(components)/IssueItem';

const Issues = async () => {
    const session = await getServerSession(authOptions);
    await secureAgainstAppr(session);
    await secureAgainstUnpartnered(session);
    const userId = session?.user?.id;
    const userAndIssues = await prisma.user.findUnique({ where: { id: userId }, select: { company: { select: { issue: true } } } })
    const usersIssues = userAndIssues?.company?.issue;

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
                {usersIssues.map((issue, idx) => (
                    <IssueItem key={idx} issue={issue} />
                ))}
            </ul>
            {/* Placeholder for the list of applications */}
            <ul className="application-list">
                {/* Map through the applications here */}
            </ul>
        </Layout>
    );
};

export default Issues;