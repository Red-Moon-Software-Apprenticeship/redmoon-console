import Layout from '@/components/Layout/Layout';
import React from 'react';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import '../adminpanel.css'
import AdminTableItem from './AdminTableItem';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { findAdmins } from '@/database/users/findUser';
import { findApprsNamesEmails } from '@/database/users/findUsers';
import ToggleModalBtn from '@/components/ToggleModalBtn';
import AddAdminModal from './AddAdminModal';

export const  dynamic ='force-dynamic'

const AdminManagement = async () => {

    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
        redirect('/api/auth/signin')
    } else if (session.user.role !== 'admin') {
        redirect('/')
    }


    const admins = await findAdmins(session?.user?.id)
    const apprs = await findApprsNamesEmails()

    return (
        <Layout>
            <ToggleModalBtn
                innerText={'Add New Admin'}
                ModalComponent={AddAdminModal}
                modalProps = {{
                    apprs: apprs
                }}
            />
            <table id="admin-page-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {admins.map((admin, idx) =>
                        <AdminTableItem key={idx} admin={admin} />
                    )}
                </tbody>
            </table>

        </Layout>
    )

};

export default AdminManagement;


