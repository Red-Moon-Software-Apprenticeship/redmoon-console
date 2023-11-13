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
        </>
    );
};

export default AdminNav;