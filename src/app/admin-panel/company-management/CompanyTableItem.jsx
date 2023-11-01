import React from 'react';
import ClipBoardCopyBtn from '@/components/ClipBoardCopyBtn';
import ToggleModalBtn from '@/components/ToggleModalBtn';
import EndPartnershipModal from './EndPartnershipModal';
import UserVerificationOverride from '@/components/UserVerificationOverride'

const CompanyTableItem = async ({ company }) => {
    const {name, email, id, verifToken, subRole} = company;
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>
                {subRole !== 'unpartnered' && 
                <ToggleModalBtn
                    innerText={'End Partnership'}
                    ModalComponent={EndPartnershipModal}
                    modalProps={{companyId: id}} 
                />}
                <ClipBoardCopyBtn
                        value={'Verification code'}
                        copiedValue={verifToken[0]?.token}
                    />
                <ToggleModalBtn
                    innerText = {`${company.emailVerified ? 'Verified' : "Verify"}`}
                    className = {`${ company.emailVerified? 'read-only-input': ''}`}
                    ModalComponent={UserVerificationOverride}
                    modalProps={{userId: id}}
                />                
            </td>


        </tr>
    );
};

export default CompanyTableItem;
