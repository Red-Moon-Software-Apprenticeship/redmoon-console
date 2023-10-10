"use client"
import React from 'react';
import { useSession } from 'next-auth/react';
import AdminNav from './AdminNav';
import ApprNav from './ApprNav';
import CompanyNav from './CompanyNav';

const RoleLockedNav = () => {
    const { data: session } = useSession()
    const role = session?.user?.role;
    const mapComponent = {
        'admin': <AdminNav />,
        'apprentice': <ApprNav />,
        'company': <CompanyNav />
    }

    const roleLockedComponent = mapComponent[role]

    return (
        <>
            {(session && session.user) && roleLockedComponent}
        </>
    )
};

export default RoleLockedNav;