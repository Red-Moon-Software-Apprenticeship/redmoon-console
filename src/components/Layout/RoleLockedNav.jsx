import React from 'react';
import { getServerSession } from 'next-auth'
import AdminNav from './AdminNav';
import ApprNav from './ApprNav';
import CompanyNav from './CompanyNav';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Link from 'next/link';
import './layout.css'

const RoleLockedNav = async () => {
    const session = await getServerSession(authOptions)
    const role = session?.user?.role;
    const mapComponent = {
    'admin': <AdminNav />,
    'apprentice': <ApprNav />,
        'company': <CompanyNav />
    }

    const roleBasedNav = mapComponent[role]
    if (!(session && session.user)) {
        return (
            <>
                <li className='nav-item'>
                    <Link href='/sign-up'>
                        Sign Up
                    </Link>
                </li>

            </>)

    } else {

        return (
            <>
                <li>
                    <Link href='/my-profile'>
                        My Profile
                    </Link>
                </li>
                {roleBasedNav}

            </>
        )
    }
};

export default RoleLockedNav;