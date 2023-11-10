import React from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import AuthProvider from '@/components/AuthProvider';
import ToggleModalBtn from '@/components/ToggleModalBtn';
import DemoteAdminModal from './DemoteAdminModal';
import DeleteAdminModal from './DeleteAdminModal';
import PromoteToSuperModal from './PromoteToSuperModal';

const AdminTableItem = async ({ admin }) => {
    const session = await getServerSession(authOptions)
    const { id, subRole } = session?.user
    const userId = admin?.id; 

    return (
        <tr>

            <td>{admin?.name}</td>
            <td>{admin?.email}</td>

            {
                (subRole === 'super admin' && admin.subRole !== 'super admin')
                ? 
                <AuthProvider>
                    <td>
                        <ToggleModalBtn
                            innerText = {'Edit'}
                            ModalComponent={DemoteAdminModal}
                            modalProps={{userId}}
                        />
                        <ToggleModalBtn
                            innerText = {'Delete'}
                            ModalComponent={DeleteAdminModal}
                            modalProps={{userId}}
                        />
                        <ToggleModalBtn
                            innerText = {'Promote'}
                            ModalComponent={PromoteToSuperModal}
                            modalProps={{userId}}
                        />

                   </td>
                </AuthProvider>

                :<td/>
            }
        </tr>

    );
};

export default AdminTableItem;