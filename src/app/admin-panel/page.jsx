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
                <ul>
                    <li>
                        <Link href='/admin-panel/apprentice/apprentice-management'>
                            Apprentice management portal
                        </Link>
                    </li>
                    <li>
                        <Link href='/admin-panel/apprentice/add-apprentice'>
                            Manually add a new apprentice
                        </Link>
                    </li>
                </ul>
            </section>
            {/* show partners */}
            <section>
                <h3>Partners</h3>
            </section>
            {/* show admins */}
            <section>
                <h3>Your Team</h3>

            </section>
        </Layout>
     );
};

export default AdminPanel;