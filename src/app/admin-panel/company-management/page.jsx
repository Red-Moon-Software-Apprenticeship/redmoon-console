import Layout from '@/components/Layout/Layout';
import React from 'react';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import '../adminpanel.css'
import CompanyTableItem from './CompanyTableItem';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { findCompanies } from '@/database/users/findUser';
import Link from 'next/link';

export const  dynamic ='force-dynamic'

const CompanyManagement = async () => {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
        redirect('/api/auth/signin');
    } else if (session.user.role !== 'admin') {
        redirect('/');
    }

    const companies = await findCompanies(session?.user?.id);

    return (
        <Layout>
            <Link href='/admin-panel/company-management/new'>
                <button>
                Add a new company    
            </button>
            </Link>
            <table id="admin-page-table">
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {companies.map((company, idx) =>
                        <CompanyTableItem key={idx} company={company} />
                    )}
                </tbody>
            </table>
        </Layout>
    );
};

export default CompanyManagement;