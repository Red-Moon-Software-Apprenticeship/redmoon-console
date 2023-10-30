import React from 'react';


const AdminTableItem = ({admin }) => {


    return (
        <tr>

            <td>{admin.firstName} {admin.lastName}</td>
            <td>{admin.email}</td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>
        </tr>
    
    );
};

export default AdminTableItem;