import React from 'react';
import ToggleModalBtn from '@/components/ToggleModalBtn';
export const useModalFactory = (innerText, ModalComponent, ...modalProps) => {
  
  return [<ToggleModalBtn innerText={innerText} modal={<ModalComponent />} modalProps={modalProps}/>]
};

export default useModalFactory;
