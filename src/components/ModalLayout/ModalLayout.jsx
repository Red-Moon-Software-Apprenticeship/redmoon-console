"use client"

import React from 'react';

const ModalLayout = ({children}) => {
  
  return (
        <div id='modal-overlay'>
            {children}
        </div>
    );
};

export default ModalLayout;