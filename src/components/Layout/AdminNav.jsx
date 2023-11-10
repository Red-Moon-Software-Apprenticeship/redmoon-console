import React from 'react';
import Link from 'next/link';
import './layout.css'

const AdminNav = () => {

    return (
        <>
            <li>
                <Link href='/admin-panel'>
                    Admin Panel
                </Link>
            </li>
            <li>
                <Link href='/issues'>
                    In House Issues
                </Link>
            </li>
        </>
    );
};

export default AdminNav;