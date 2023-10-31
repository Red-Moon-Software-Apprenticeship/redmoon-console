import React from 'react';
import DeleteAdminBtn from './DeleteAdminBtn';
import DemoteAdminBtn from './DemoteAdminBtn';
import PromoteToSuperBtn from './PromoteToSuperBtn';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import AuthProvider from '@/components/AuthProvider';


const AdminTableItem = async ({ admin }) => {
    const session = await getServerSession(authOptions)
    const { id, subRole } = session?.user

    return (
        <tr>

            <td>{admin?.name}</td>
            <td>{admin?.email}</td>

            {
                subRole === 'super admin' &&
                <AuthProvider>
                    <td>
                        <DemoteAdminBtn userId={id} />
                        <DeleteAdminBtn userId={id} />
                        <PromoteToSuperBtn userId={id} />
                    </td>
                </AuthProvider>
            }
        </tr>

    );
};

export default AdminTableItem;