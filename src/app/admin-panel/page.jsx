import Layout from '@/components/Layout/Layout';
import React from 'react';
import { secureAdminServerRoute } from '@/lib/secureAdminRoute';
import Link from 'next/link';

//Have an apprentice portal that specifically queries all of the apprentices
//Then have an form for adding a new apprentice
const AdminPanel = async () => {

    await secureAdminServerRoute()

    return (
        <Layout>
            <section>
                <h3>Apprentices</h3>

                <Link href='/admin-panel/apprentice-management'>
                    Apprentice management portal
                </Link>

            </section>
            <section>
                <h3>Partners</h3>

                <Link href='/admin-panel/company-management'>
                    Company management portal
                </Link>
            </section>
            <section>
                <h3>Your Team</h3>

                <Link href='/admin-panel/admin-management'>
                    Admin management
                </Link>
            </section>
        </Layout>
    );
};

export default AdminPanel;