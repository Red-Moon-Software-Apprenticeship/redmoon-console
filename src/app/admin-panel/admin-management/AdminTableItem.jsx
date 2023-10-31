import React from 'react';
import DeleteAdminBtn from './DeleteAdminBtn';
import DemoteAdminBtn from './DemoteAdminBtn';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';



const AdminTableItem = ({admin }) => {
    const session = getServerSession(authOptions)
    const subRole = session?.user?.subRole
    

    return (
        <tr>

            <td>{admin.name}</td>
            <td>{admin.email}</td>
            <td>
                <DemoteAdminBtn/>
                <DeleteAdminBtn/>
            </td>
        </tr>
    
    );
};

export default AdminTableItem;