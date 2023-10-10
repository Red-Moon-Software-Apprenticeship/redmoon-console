import React from 'react';
import Link from 'next/link';

const CompanyNav = () => {
  
    return (
        <>
            <li>
                <Link href='/history'>
                    History
                </Link>
            </li>
        </>
    );
};

export default CompanyNav;