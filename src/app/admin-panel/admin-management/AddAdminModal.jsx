"use client"
import React, { useState } from 'react';
import ModalLayout from '@/components/ModalLayout/ModalLayout';
import { useErrors } from '@/hooks';
import { createReq } from '@/lib/createReqObj';

const AddAdminModal = ({ apprs, toggleModal }) => {
    const [filteredApprs, setFilteredApprs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedApprentice, setSelectedApprentice] = useState({});
    const [errors, setErrors, clearErrorsEffect, Errors] = useErrors()

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        if (e.target.value === '') {
            setFilteredApprs(apprs);
        } else {
            const searchResults = apprs.filter(appr =>
                appr.name.toLowerCase()
                    .includes(e.target.value.toLowerCase()) ||
                appr.email.toLowerCase()
                    .includes(e.target.value.toLowerCase())
            );

            setFilteredApprs(searchResults);
        }
    };

    const handleChange = (e) => {
        setSelectedApprentice(e.target.value);
    };


    const handlePromote = async (e) => {
        e.stopPropagation();

        if (!selectedApprentice){
            setErrors(["Please select an apprentice"])
            return
        }

        const body = {
            id: selectedApprentice,
            role: 'admin', 
            subRole: ''
        }

        try {
                const response = await fetch(
                    `/api/user/role/`, 
                    createReq('PATCH', body)
                );

                if (response.ok) toggleModal()
        
        } catch (error) {
            setErrors([error])
            alert('Error promoting apprentice.');
        }
     
    };


    return (
        <ModalLayout toggleModal={toggleModal}>
            <dialog
                open
                id='new-admin-modal'
                className="admin-modal"
                onClick={e => e.stopPropagation()}
            >
                <h2>Promote Apprentice to Admin</h2>
                <ol>
                    <li>
                        Have the person sign up as an apprentice
                    </li>
                    <li>
                        Search for their email or name below
                    </li>
                    <li>
                        If you're getting tired of doing it this way, open source the creation for admins.
                    </li>
                </ol>
                <input
                        type="text"
                        placeholder="Search by name or email..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="search-input"
                    />
                    <select
                        value={selectedApprentice}
                        onChange={handleChange}
                        className="apprentice-dropdown"
                    >

                       
                    <option value={null}>Select an apprentice...</option>
                    {filteredApprs.map(appr => (
                                    <option
                                        key={appr.id}
                                        value={appr.id}>
                                        {appr.name}
                                    </option>
                                ))
                    }
                    </select>
                    <button
                        onClick={handlePromote}
                        className="promote-button"
                    >
                        Promote to Admin
                    </button>
                    <Errors errors={errors} />

            </dialog>
        </ModalLayout>
    );
};

export default AddAdminModal;
