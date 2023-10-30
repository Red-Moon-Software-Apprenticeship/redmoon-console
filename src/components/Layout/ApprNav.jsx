import React from 'react';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import './layout.css'

const ApprNav = async () => {
    const session = await getServerSession(authOptions)
    const subRole = session?.user?.subRole
    return (
        <>
          
            { subRole === 'unmerged issue' &&
              
              <li>
                <Link href='/apprentice-portal/unmerged-issue'>
                    Merge Your First Issue
                </Link>

              </li>

            }
        </>
    );
};

export default ApprNav;