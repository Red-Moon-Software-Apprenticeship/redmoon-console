"use client"
import React, { useState, useEffect } from 'react';
import DeleteApprModal from './DeleteApprModal';
import EditApprModal from './EditApprModal';
import ClipBoardCopyBtn from '@/components/ClipBoardCopyBtn';


const ApprConsole = () => {
    const [apprs, setApprs] = useState([]);
    const [delModal, setDelModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [currAppr, setCurrAppr] = useState({});
    const apprsState = { apprs, setApprs };

    useEffect(() => {
        fetch('/api/apprentice')
            .then(response => response.json())
            .then(data => setApprs(data))
            .catch(error => console.error('Error fetching apprentices:', error));

    }, []);

     const handleDelete = (e, appr) => {
        e.stopPropagation()
        setDelModal(prev => !prev)
        setCurrAppr(appr)
    }

    const handleEdit = (e, appr) => {
        e.stopPropagation()
        setEditModal(prev => !prev)
        setCurrAppr(appr)
    }

    const handleEmailClick = (e, email) => {
        e.stopPropagation()
        navigator.clipboard.writeText(email)
        alert(`Email copied to clipboard: ${email}`)

    }

    const toggleModal = (getter, setter) => {
        setter(!getter)
        setCurrAppr('')
    }

    return (<>
        {apprs.map((appr, idx) =>
            <tr key={idx}>
                <td className='cursor-events'>{appr.name}</td>
                <td className='cursor-events'
                    onClick={e => handleEmailClick(e, appr.email)}>
                    {appr.email}
                </td>
                <td> {appr.apprentice.level}</td>
                <td>
                    <button onClick={e => handleDelete(e, appr)}>
                        Remove
                    </button>
                </td>
                <td>
                    <button onClick={e => handleEdit(e, appr)}>
                        Edit Info
                    </button>
                </td>
                <td>
                    <ClipBoardCopyBtn
                        value={'Verification code'}
                        copiedValue={appr.verifToken?.token}
                    />
                </td>
            </tr>
        )}

        {delModal && <DeleteApprModal appr={currAppr} toggleModal={() => toggleModal(delModal, setDelModal)} apprsState={apprsState} />}
        {editModal && <EditApprModal appr={currAppr} toggleModal={() => toggleModal(editModal, setEditModal)} apprsState={apprsState} />}
    </>
    );
};

export default ApprConsole;