import React from 'react';


//Specifically for use on modals
const ExitButton = ({toggleModal}) => {


    return (
    <div className='flex-right'>
        <button onClick={toggleModal}>
            Exit
        </button>
    </div>
  );
};

export default ExitButton;