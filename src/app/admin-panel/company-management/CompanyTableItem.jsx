import React from 'react';
import EndPartnershipBtn from './EndPartnershipBtn'
import ClipBoardCopyBtn from '@/components/ClipBoardCopyBtn';
const CompanyTableItem = async ({ company }) => {
    const {name, email, id, verifToken, subRole} = company;
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>
                {subRole !== 'unpartnered' && <EndPartnershipBtn companyId={id} />}
                <ClipBoardCopyBtn
                        value={'Verification code'}
                        copiedValue={verifToken[0]?.token}
                    />
            </td>


        </tr>
    );
};

export default CompanyTableItem;
