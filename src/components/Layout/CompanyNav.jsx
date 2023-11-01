import React from 'react';
import Link from 'next/link';
import './layout.css'

const CompanyNav = () => {
  
    return (
        <>
            <li>
                <Link href='/history'>
                    History
                </Link>
            </li>
            <li>
                <Link href='/new-issue'>
                    Issues
                </Link>
            </li>
        </>
    );
};

export default CompanyNav;