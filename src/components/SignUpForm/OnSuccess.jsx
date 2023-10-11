import React from 'react';
import './signupform.css'

const OnSuccess = ({successMsg}) => {

  return (
    <>
      {
      !!successMsg && <div>
            <p>{successMsg}</p>
          </div>
        }
    </>
  );
};

export default OnSuccess;

