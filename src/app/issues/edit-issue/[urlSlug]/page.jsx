import React from 'react';
import '../../issues.css'
import Layout from '@/components/Layout/Layout';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { secureAgainstAppr } from '@/lib/secureAgainstAppr';
import { secureAgainstUnpartnered } from '@/lib/secureAgainstUnpartnered';
import { findIssueForEdit } from '@/database/issues';
import IssueForm from '../../(components)/IssueForm';

const EditIssue = async ({params}) => {
   const session = await getServerSession(authOptions)
    await secureAgainstAppr(session);
    await secureAgainstUnpartnered(session);
    const urlSlug = params.urlSlug;
    const [issue] = await findIssueForEdit(urlSlug)

  return (
   <Layout>
     <IssueForm
                companyName={session?.user?.name}
                companyId={issue.companyId}
                defaultTechStack={issue.techStack}
                issue={issue}            
            />
   </Layout> 
  );
};

export default EditIssue;