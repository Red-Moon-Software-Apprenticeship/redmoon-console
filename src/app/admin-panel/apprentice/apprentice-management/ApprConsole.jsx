"use client"
import React, { useState } from 'react';
import DeleteApprModal from './DeleteApprModal';

const ApprConsole = ({ apprs }) => {
    const [delApprModal, setDelApprModal] = useState(false)
    const [editApprModal, setEditApprModal] = useState(false)
    const [currAppr, setCurrAppr] = useState({})

    const handleDelete = (e, appr) => {
        e.stopPropagation()

        setDelApprModal(!delApprModal)
        setCurrAppr(appr)
    }

    const handleEdit = (e, appr) => {
        e.stopPropagation()
        setEditApprModal(!editApprModal)
        setCurrAppr(appr)
    }

    const handleEmailClick = (e, email) =>{
        e.stopPropagation()

        console.log(email)

    }

    return (<>

        <table>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Level</th>
            </tr>
            {apprs.map((appr, idx) =>
                <tr key={idx}>
                    <td className='flex-left'>{appr.firstName} {appr.lastName}</td>
                    <td className='cursor-events' 
                        onClick={e => handleEmailClick(e, appr.user.email)}>
                        {appr.user.email}
                    </td>
                    <td> {appr.level}</td>
                    <td>
                        <button onClick={e => handleDelete(e, appr)}>
                            Remove
                        </button>
                    </td>
                    <td><button onClick={e => handleEdit(e, appr)}>
                        Edit Info
                    </button>
                    </td>
                </tr>
            )}
        </table>

        {delApprModal && <DeleteApprModal />}
        {editApprModal && <EditApprModal />}
    </>
    );
};

export default ApprConsole;