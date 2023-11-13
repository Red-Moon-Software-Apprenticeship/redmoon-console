import React from 'react';
import Link from 'next/link';
import './layout.css'
import { useSession } from 'next-auth/react';

const ApprNav =  () => {
    const {data: session} = useSession()
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