import ModalLayout from '@/components/ModalLayout/ModalLayout';
import React from 'react';

const VerifModal = ({ toggleModal }) => {

  const handleOnClick = (e) => {
      e.preventDefault()
      e.stopPropagation()
      
      //make a request to the route resposnible for manually verifying the user
  }

  return (
    <ModalLayout toggleModal={toggleModal}>
      <dialog open onClick={e => e.stopPropagation()}>
        <h4>Are you sure that you want to verify this person's account?</h4>
        <p>You should let them know separately that their account has been verified</p>
        <div className="flex-center">

          <button onClick={toggleModal}>
            Verify
          </button>
          <button onClick={toggleModal}>
            Exit
          </button>
        </div>
      </dialog>
    </ModalLayout>
  );
};

export default VerifModal;