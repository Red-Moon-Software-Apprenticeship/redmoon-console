"use client"
import React from 'react';
import AdminNav from './AdminNav';
import ApprNav from './ApprNav';
import CompanyNav from './CompanyNav';
import Link from 'next/link';
import './layout.css'
import { useSession } from 'next-auth/react';

const RoleLockedNav = () => {
    const {data: session} = useSession()
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