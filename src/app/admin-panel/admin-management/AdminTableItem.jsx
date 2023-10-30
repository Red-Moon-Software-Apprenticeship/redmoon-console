import React from 'react';
import DeleteAdminBtn from './DeleteAdminBtn';



const AdminTableItem = ({admin }) => {


    return (
        <tr>

            <td>{admin.name}</td>
            <td>{admin.email}</td>
            <td>
                <button>Edit</button>
                <DeleteAdminBtn/>
            </td>
        </tr>
    
    );
};

export default AdminTableItem;