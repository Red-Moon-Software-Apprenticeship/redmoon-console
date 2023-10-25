import React from 'react';

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

