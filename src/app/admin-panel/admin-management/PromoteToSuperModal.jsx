import React from 'react';
import ModalLayout from '@/components/ModalLayout/ModalLayout';
import { useErrors } from '@/hooks';
import { createReq } from '@/lib/createReqObj';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { secureSuperAdminClientFeature } from '@/lib/secureAdminClientFeature';
import '../adminpanel.css'

const PromoteToSuperModal = ({ userId, toggleModal }) => {
    const [errors, setErrors, _ , Errors] = useErrors();
    const router = useRouter()    
    const {data: session} = useSession()
    secureSuperAdminClientFeature(router, session?.user )


    const handleOnClick = async () => {
        const body = {
            id: userId,
            subRole: 'super admin',
        };
        try {
            const response = await fetch(
                `/api/user/subrole/super-admin`,
                createReq('PATCH', body)
            );

            if (response.ok) {
                toggleModal();
                router.refresh()
            } else {
                throw new Error('Failed to promote to super admin.');
            }
        } catch (error) {
            setErrors([error.message]);
        }
    };

    return (
        <ModalLayout toggleModal={toggleModal}>
            <dialog open id="promote-admin-modal" className="admin-modal" onClick={e => e.stopPropagation()}>
                <h2>Promote to Super Admin</h2>
                <p>Warning: super admins are given access to the top-level permissions, be careful </p>
                <p>NOTE ALSO, IF YOU PROMOTE SOMEONE TO SUPER ADMIN, THEY CANNOT BE DEMOTED</p>
                <p>Are you sure you want to promote this user to a super admin?</p>
                <button onClick={handleOnClick} className="promote-button">Promote</button>
                <Errors errors={errors} />
            </dialog>
        </ModalLayout>
    );
};

export default PromoteToSuperModal;
