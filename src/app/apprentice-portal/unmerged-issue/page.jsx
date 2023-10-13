import React from 'react';
import Layout from '@/components/Layout/Layout';
import Link from 'next/link';
import IssueSubmissionForm from './IssueSubmissionForm';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const UnmergedIssue = async () => {

    const session = await getServerSession(authOptions);
    const role = session?.user?.role;
    const userId = session?.user?.id;
    if (!session || !["admin", "apprentice"].includes(role)) {
        redirect("/");
    }

    return (
        <Layout>
            <h1>Merge Your First Issue!</h1>
            <p>Admission to the Redmoon Apprenticeship requires one thing: a merged issue to one of our projects</p>
            <h2>Here's a list of our current projects</h2>

            <ul>
                <li>
                    <Link href='https://github.com/Red-Moon-Software-Apprenticeship/redmoon-console' target='_blank'>
                        Redmoon Console
                    </Link>
                </li>
                <li>
                    <Link href='https://github.com/Red-Moon-Software-Apprenticeship/redmoon-code-screen' target='_blank'>
                        Redmoon code screen
                    </Link>
                </li>
            </ul>

            <p>Once you finish, please submit your project below</p>
            <IssueSubmissionForm userId={userId}/>
        </Layout>
    );
};

export default UnmergedIssue;