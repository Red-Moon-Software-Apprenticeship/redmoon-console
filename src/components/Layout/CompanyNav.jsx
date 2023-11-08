import React from 'react';
import Link from 'next/link';
import './layout.css'

const CompanyNav = () => {
  
    return (
        <> 
            <li>
                <Link href='/issues'>
                    Issues
                </Link>
            </li>
        </>
    );
};

export default CompanyNav;