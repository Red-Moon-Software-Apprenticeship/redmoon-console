
import React from 'react';

const useModalFactory = (innerText, ModalComponent, ...modalProps) => {

  return [<AbstractModalBtn innerText={innerText} modal={<ModalComponent />} modalProps={modalProps}/>]
};

export default useModalFactory;


import React from 'react';

const useModalFactory = (innerText, ModalComponent, ...modalProps) => {

  return [<AbstractModalBtn innerText={innerText} modal={<ModalComponent {...modalProps}  />}]
};

export default useModalFactory;